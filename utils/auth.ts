// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

// Somewhere in your code
export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      return response.data;
    } else {
      // sign in was cancelled by user
      console.log('cancelled');
      return {
        message: 'cancelled',
      };
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          return {
            message: 'in progress',
          };
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          console.log('play services not available');
          return {
            message: 'play services not available',
          };
        default:
          // some other error happened
          return {
            message: 'some other error happened',
          };
      }
    } else {
      return error;
    }
  }
};
