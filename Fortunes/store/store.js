import {configureStore} from '@reduxjs/toolkit';
import fortunestore from '../fortuneretucers.js';

export const store = configureStore({
  reducer: {
    fortunedata: fortunestore,
  },
});
