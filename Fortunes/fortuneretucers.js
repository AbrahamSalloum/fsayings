import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  fortunefiles: false,
  searchterm: false,
  minlength: false,
  maxlength: false,
  args: '-a',
  darkmode: false,
  singleeview: false,
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
    toggledarkmode: (state, action) => {
      state.darkmode = !state.darkmode;
    },
    togglesingleview: (state, action) => {
      state.singleeview = !state.singleeview;
    },
  },
});

export const {
  setfortunefiles,
  setsearchterm,
  setminlength,
  setmaxlength,
  setargs,
  toggledarkmode,
  togglesingleview,
} = fortuneSlice.actions;

export const fortunefiles = state => state.fortunedata.fortunefiles;
export const searchterm = state => state.fortunedata.searchterm;
export const minlength = state => state.fortunedata.minlength;
export const maxlength = state => state.fortunedata.maxlength;
export const args = state => state.fortunedata.args;
export const darkmode = state => state.fortunedata.darkmode;
export const singleeview = state => state.fortunedata.singleeview;

export default fortuneSlice.reducer;
