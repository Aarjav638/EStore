import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './feature/Cart';
import authReducer from './feature/Auth';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
