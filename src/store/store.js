import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { calendarioSlice } from './calendario';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendario: calendarioSlice.reducer,
  },
})