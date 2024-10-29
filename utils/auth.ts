// Import GoogleSignin, statusCodes, and relevant utilities
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      return response.data;
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
