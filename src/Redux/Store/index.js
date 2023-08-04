import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import userReducer from '../Slice/index';
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
setupListeners(store.dispatch);
