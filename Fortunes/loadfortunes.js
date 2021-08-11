import {fortunefiles, catlist} from './datafiles.js';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {setfortunefiles, setargs} from './fortuneretucers';
import {store} from './store/store.js';

export const storeFortuneSelection = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@fortunevalues', jsonValue);
  } catch (err) {
    return err;
  }
};

export const getFortuneSelection = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@fortunevalues');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    return err;
  }
};

export const stringToColour = stri => {
  let str = stri.toString();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }

  return colour + '66';
};

const badtimer = (starttime, length) => {
  return Date.now() - starttime < length;
};

const getrandom = async (amount = 200) => {
  let minlength = store.getState().fortunedata.minlength;
  let maxlength = store.getState().fortunedata.maxlength;
  let assortment = new Set();
  let fortunesettings = await getFortuneSelection();
  let allowedfortunes = [];
  if (!!fortunesettings === false) {
    allowedfortunes = Object.keys(fortunefiles);
  } else {
    Object.keys(fortunesettings).forEach(c => {
      if (fortunesettings[c].toggle === true) {
        if (Object.keys(fortunefiles).includes(c)) {
          allowedfortunes.push(c);
        }
      }
    });
  }
  if (allowedfortunes.length === 0) {
    store.dispatch(
      setfortunefiles([{t: 'notice', f: 'Select at least one category\n\n\n'}]),
    );
    return;
  }

  let startTime = Date.now();
  while (assortment.size < amount && badtimer(startTime, 4000)) {
    let randomcat = Math.floor(Math.random() * allowedfortunes.length); //pick a category at random
    let cat = fortunefiles[allowedfortunes[randomcat]]; //pick a category at random
    let randomfortune = Math.floor(Math.random() * cat.length); //pick a fortune number in that category
    let f = cat[randomfortune]; // the fortune
    if (!!maxlength === true || !!minlength === true) {
      if (!!minlength === true && !!maxlength === true) {
        if (f.f.length <= maxlength && f.f.length >= minlength) {
          assortment.add(f);
          continue;
        }
      }
      if (!!maxlength === true && !!minlength === false) {
        if (f.f.length <= maxlength) {
          assortment.add(f);
          continue;
        }
      }
      if (!!minlength === true && !!maxlength === false) {
        if (f.f.length >= minlength) {
          assortment.add(f);
          continue;
        }
      }
    } else {
      assortment.add(f);
      store.dispatch(setargs('-a'));
    }
  }
  store.dispatch(setfortunefiles(shuffle([...assortment])));
};

const shuffle = array => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const SearchFortuneText = () => {
  const searchterm = store.getState().fortunedata.searchterm;
  if (!!searchterm === false) {
    getrandom(200);
    return;
  }
  let searchmatches = [];
  let regex;
  try {
    // if any invalid regex is inputted, just match everything
    regex = new RegExp(searchterm, 'gi');
  } catch {
    regex = new RegExp('.*', 'gi');
  }
  for (let cat in fortunefiles) {
    for (let entry of fortunefiles[cat]) {
      let ismatch = regex.test(entry.f);
      if (!!ismatch === true) {
        searchmatches.push(entry);
      }
    }
  }
  store.dispatch(setfortunefiles(shuffle(searchmatches)));
};

export {fortunefiles, catlist};
export default getrandom;
