// Import GoogleSignin, statusCodes, and relevant utilities
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {AccessToken, LoginManager, Profile} from 'react-native-fbsdk-next';
import {AuthState, logOut} from '../redux/feature/Auth';
import {ThunkDispatch, UnknownAction} from '@reduxjs/toolkit';
import {CartState} from '../constants/types';

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      const userInfo = {
        idToken: response.data.idToken,
        user: {
          email: response.data.user.email || '',
          id: response.data.user.id || '',
          name: response.data.user.name || '',
          photo: response.data.user.photo || '',
        },
      };

      return userInfo;
    } else {
      console.log('Sign-in was canceled by the user');
      throw new Error('User canceled sign-in');
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          throw new Error('Sign-in is already in progress');
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          throw new Error(
            'Google Play Services is not available or is outdated',
          );
        case statusCodes.SIGN_IN_REQUIRED:
          throw new Error('Sign-in is required to proceed');
        default:
          throw new Error('An unknown error occurred during sign-in');
      }
    } else {
      throw new Error(
        (error as Error)?.message || 'An unexpected error occurred',
      );
    }
  }
};

export const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw new Error('User canceled the login process');
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw new Error('Something went wrong obtaining access token');
    }
    const profile = await Profile.getCurrentProfile();
    const userInfo = {
      idToken: data.accessToken,
      user: {
        email: profile?.email || '',
        id: profile?.userID || '',
        name: profile?.name || '',
        photo: profile?.imageURL || '',
      },
    };
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export const handleCompleteLogout = async (
  dispatch: ThunkDispatch<
    {
      cart: CartState;
      auth: AuthState;
    },
    undefined,
    UnknownAction
  >,
) => {
  try {
    await GoogleSignin.signOut();
    await LoginManager.logOut();
    dispatch(logOut());
  } catch (error) {
    console.error('Error logging out: ', error);
  }
};
