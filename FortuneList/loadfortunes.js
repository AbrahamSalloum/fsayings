import art from '../jsonfortunes/art.json';
import asciiart from '../jsonfortunes/ascii-art.json';
import computers from '../jsonfortunes/computers.json';
import cookie from '../jsonfortunes/cookie.json';
import debian from '../jsonfortunes/debian.json';
import definitions from '../jsonfortunes/definitions.json';
import drugs from '../jsonfortunes/drugs.json';
import education from '../jsonfortunes/education.json';
import ethnic from '../jsonfortunes/ethnic.json';
import food from '../jsonfortunes/food.json';
import fortunes from '../jsonfortunes/fortunes.json';
import goedel from '../jsonfortunes/goedel.json';
import humorists from '../jsonfortunes/humorists.json';
import kids from '../jsonfortunes/kids.json';
import knghtbrd from '../jsonfortunes/knghtbrd.json';
import law from '../jsonfortunes/law.json';
import linux from '../jsonfortunes/linux.json';
import linuxcookie from '../jsonfortunes/linuxcookie.json';
import literature from '../jsonfortunes/literature.json';
import love from '../jsonfortunes/love.json';
import magic from '../jsonfortunes/magic.json';
import medicine from '../jsonfortunes/medicine.json';
import menwomen from '../jsonfortunes/men-women.json';
import miscellaneous from '../jsonfortunes/miscellaneous.json';
import news from '../jsonfortunes/news.json';
import paradoxum from '../jsonfortunes/paradoxum.json';
import people from '../jsonfortunes/people.json';
import perl from '../jsonfortunes/perl.json';
import pets from '../jsonfortunes/pets.json';
import platitudes from '../jsonfortunes/platitudes.json';
import politics from '../jsonfortunes/politics.json';
import pratchett from '../jsonfortunes/pratchett.json';
import riddles from '../jsonfortunes/riddles.json';
import science from '../jsonfortunes/science.json';
import songspoems from '../jsonfortunes/songs-poems.json';
import sports from '../jsonfortunes/sports.json';
import startrek from '../jsonfortunes/startrek.json';
import tao from '../jsonfortunes/tao.json';
import translateme from '../jsonfortunes/translate-me.json';
import wisdom from '../jsonfortunes/wisdom.json';
import work from '../jsonfortunes/work.json';
import zippy from '../jsonfortunes/zippy.json';

export const catlist = [
  {catname: 'art'},
  {catname: 'ascii-art'},
  {catname: 'computers'},
  {catname: 'cookie'},
  {catname: 'debian'},
  {catname: 'definitions'},
  {catname: 'disclaimer'},
  {catname: 'drugs'},
  {catname: 'education'},
  {catname: 'ethnic'},
  {catname: 'food'},
  {catname: 'fortunes'},
  {catname: 'goedel'},
  {catname: 'humorists'},
  {catname: 'kids'},
  {catname: 'knghtbrd'},
  {catname: 'law'},
  {catname: 'linux'},
  {catname: 'linuxcookie'},
  {catname: 'literature'},
  {catname: 'love'},
  {catname: 'magic'},
  {catname: 'medicine'},
  {catname: 'men-women'},
  {catname: 'miscellaneous'},
  {catname: 'news'},
  {catname: 'paradoxum'},
  {catname: 'people'},
  {catname: 'perl'},
  {catname: 'pets'},
  {catname: 'platitudes'},
  {catname: 'politics'},
  {catname: 'pratchett'},
  {catname: 'riddles'},
  {catname: 'science'},
  {catname: 'songs-poems'},
  {catname: 'sports'},
  {catname: 'startrek'},
  {catname: 'tao'},
  {catname: 'translate-me'},
  {catname: 'wisdom'},
  {catname: 'work'},
  {catname: 'zippy'},
];

const fortunefiles = {
  art,
  asciiart,
  computers,
  cookie,
  debian,
  definitions,
  drugs,
  education,
  ethnic,
  food,
  fortunes,
  goedel,
  humorists,
  kids,
  knghtbrd,
  law,
  linux,
  linuxcookie,
  literature,
  love,
  magic,
  medicine,
  menwomen,
  miscellaneous,
  news,
  paradoxum,
  people,
  perl,
  pets,
  platitudes,
  politics,
  pratchett,
  riddles,
  science,
  songspoems,
  sports,
  startrek,
  tao,
  translateme,
  wisdom,
  zippy,
  work,
};

export const stringToColour = stri => {
  const str = stri.toString();
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

const getrandom = (amount = 200) => {
  let assortment = [];
  for (let i = 0; i < amount; i++) {
    const randomcat = Math.floor(
      Math.random() * Object.keys(fortunefiles).length,
    );
    const cat = fortunefiles[Object.keys(fortunefiles)[randomcat]];
    const randomfortune = Math.floor(Math.random() * cat.length);
    const f = cat[randomfortune];
    assortment.push(f);
  }
  return assortment;
};

export default getrandom;