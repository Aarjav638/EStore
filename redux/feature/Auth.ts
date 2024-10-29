import {createSlice} from '@reduxjs/toolkit';
export interface UserAuthData {
  idToken: string;
  scopes: string[];
  serverAuthCode: string | null;
  user: {
    email: string;
    familyName: string;
    givenName: string;
    id: string;
    name: string;
    photo: string;
  };
}

type AuthState = {
  userInfo: UserAuthData;
  error: string;
  loading: boolean;
};

const initialCartState: AuthState = {
  userInfo: {
    idToken: '',
    scopes: [],
    serverAuthCode: '',
    user: {
      email: '',
      familyName: '',
      givenName: '',
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
      state.userInfo = {
        idToken: '',
        scopes: [],
        serverAuthCode: '',
        user: {
          email: '',
          familyName: '',
          givenName: '',
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
