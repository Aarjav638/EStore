import {createSlice} from '@reduxjs/toolkit';
export interface UserAuthData {
  idToken?: string;
  user: {
    email?: string;
    id?: string;
    name?: string;
    photo?: string;
    mobile?: string;
  };
}

export type AuthState = {
  userInfo: UserAuthData;
  error: string;
};

const initialCartState: AuthState = {
  userInfo: {
    idToken: undefined,
    user: {
      email: undefined,
      id: '',
      name: '',
      photo: undefined,
      mobile: undefined,
    },
  },
  error: '',
};

const authSlice = createSlice({
  name: 'Auth',
  initialState: initialCartState,
  reducers: {
    setUserInfo: (state, action) => {
      try {
        state.userInfo = action.payload;
        state.error = '';
      } catch (error) {
        state.error = error as string;
      }
    },
    logOut: state => {
      console.log('Logging out');
      state.userInfo = {
        idToken: undefined,
        user: {
          email: undefined,
          id: undefined,
          name: undefined,
          photo: undefined,
          mobile: undefined,
        },
      };
    },
  },
});

export const {setUserInfo, logOut} = authSlice.actions;
export default authSlice.reducer;
