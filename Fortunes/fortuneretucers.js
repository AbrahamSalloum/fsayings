import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  fortunefiles: false,
  searchterm: false,
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
  },
});

export const {setfortunefiles, setsearchterm} = fortuneSlice.actions;
export const fortunefiles = state => state.fortunedata.fortunefiles;
export const searchterm = state => state.fortunedata.searchterm;

export default fortuneSlice.reducer;
