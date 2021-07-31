import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  fortunefiles: false,
  searchterm: false,
  minlength: false,
  maxlength: false,
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
  },
});

export const {setfortunefiles, setsearchterm, setminlength, setmaxlength} =
  fortuneSlice.actions;
export const fortunefiles = state => state.fortunedata.fortunefiles;
export const searchterm = state => state.fortunedata.searchterm;
export const minlength = state => state.fortunedata.minlength;
export const maxlength = state => state.fortunedata.maxlength;

export default fortuneSlice.reducer;
