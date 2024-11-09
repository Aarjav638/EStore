import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './feature/Cart';
import authReducer from './feature/Auth';
import LogRocket from '@logrocket/react-native';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(LogRocket.reduxMiddleware()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
