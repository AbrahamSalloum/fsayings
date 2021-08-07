import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFortuneSelection = async () => {
  try {
    const v = await AsyncStorage.getItem('@darkmode');
    let isTrueSet = (v === 'true');
    return isTrueSet;
  } catch (err) {
    return err;
  }
};

const initialState = {
  fortunefiles: false,
  searchterm: false,
  minlength: false,
  maxlength: false,
  args: '-a',
  darkmode: false,
  singleeview: false,
  fontsize: 16,
};

export const fortuneSlice = createSlice({
  name: 'setfortunes',
  initialState,
  reducers: {
    setfortunefiles: (state, action) => {
      state.fortunefiles = action.payload;
    },
    setsearchterm: (state, action) => {
      state.searchterm = action.payload;
    },
    setminlength: (state, action) => {
      state.minlength = action.payload;
    },
    setmaxlength: (state, action) => {
      state.maxlength = action.payload;
    },
    setargs: (state, action) => {
      state.args = action.payload;
    },
    setstoreddarkmode: (state, action) => {
      setdarkmode(action.payload);
      state.darkmode = action.payload;
    },
    toggledarkmode: (state, action) => {
      state.darkmode = !state.darkmode;
      setdarkmode(state.darkmode);
    },
    togglesingleview: (state, action) => {
      state.singleeview = !state.singleeview;
    },
    setfontsize: (state, action) => {
      state.fontsize = action.payload;
    },
  },
});

const setdarkmode = async v => {
  try {
    await AsyncStorage.setItem('@darkmode', v.toString());
  } catch (err) {
    return err;
  }
};

export const {
  setfortunefiles,
  setsearchterm,
  setminlength,
  setmaxlength,
  setargs,
  toggledarkmode,
  togglesingleview,
  setfontsize,
  setstoreddarkmode,
} = fortuneSlice.actions;

export const fortunefiles = state => state.fortunedata.fortunefiles;
export const searchterm = state => state.fortunedata.searchterm;
export const minlength = state => state.fortunedata.minlength;
export const maxlength = state => state.fortunedata.maxlength;
export const args = state => state.fortunedata.args;
export const darkmode = state => state.fortunedata.darkmode;
export const singleeview = state => state.fortunedata.singleeview;
export const fontsize = state => state.fortunedata.fontsize;

export default fortuneSlice.reducer;
