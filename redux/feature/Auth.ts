import {createSlice} from '@reduxjs/toolkit';
export interface UserAuthData {
  idToken: string;
  user: {
    email?: string;
    id: string;
    name: string;
    photo: string;
  };
}

export type AuthState = {
  userInfo: UserAuthData;
  error: string;
  loading: boolean;
};

const initialCartState: AuthState = {
  userInfo: {
    idToken: '',
    user: {
      email: undefined,
      id: '',
      name: '',
      photo: '',
    },
  },
  error: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialCartState,
  reducers: {
    setUserInfo: (state, action) => {
      state.loading = true;
      try {
        state.userInfo = action.payload;
        state.error = '';
        state.loading = false;
      } catch (error) {
        state.error = error as string;
      }
    },
    logOut: state => {
      console.log('Logging out');
      state.userInfo = {
        idToken: '',
        user: {
          email: '',
          id: '',
          name: '',
          photo: '',
        },
      };
    },
  },
});

export const {setUserInfo, logOut} = authSlice.actions;
export default authSlice.reducer;
