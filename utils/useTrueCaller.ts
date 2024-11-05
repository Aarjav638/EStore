import { useEffect, useState } from 'react';
import {
  NativeModules,
  DeviceEventEmitter,
  Platform,
} from 'react-native';
import axios from 'axios';

import {
  type IAndroidUserResponse,
  type ITruecallerBase,
  type IUser,
  type IUseTruecaller,
} from '../constants/truecallerInterface';

import {
  TRUECALLER_ANDROID_CUSTOMIZATIONS,
  TRUECALLER_ANDROID_EVENTS,
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_TEXT_COLOR,
} from '../constants/truecallerConstant';

const TruecallerAndroid = NativeModules.TrueCallerAndroidModule;

const initialize = ({
  androidButtonColor,
  androidButtonTextColor,
  androidButtonStyle,
  androidButtonText,
  androidFooterButtonText,
  androidConsentHeading,
}: ITruecallerBase) => {
  if (Platform.OS === 'android')
    TruecallerAndroid.initialize(
      androidButtonColor || DEFAULT_BUTTON_COLOR,
      androidButtonTextColor || DEFAULT_BUTTON_TEXT_COLOR,
      androidButtonText ||
        TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_TEXTS.ACCEPT,
      androidButtonStyle ||
        TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_STYLES.ROUND,
      androidFooterButtonText ||
        TRUECALLER_ANDROID_CUSTOMIZATIONS.FOOTER_BUTTON_TEXTS.ANOTHER_METHOD,
      androidConsentHeading ||
        TRUECALLER_ANDROID_CUSTOMIZATIONS.CONSENT_HEADING_TEXTS.CHECKOUT_WITH
    );
  
  else {
    //TODO error handling

  }
};

const openTruecallerModal = () => {
  if (Platform.OS === 'android') TruecallerAndroid.invoke();
  else if (Platform.OS === 'ios') {
    //TODO IOS modal
    console.log('IOS modal')
  }
};

const isTruecallerSupported = () => {
  if (Platform.OS === 'android') return TruecallerAndroid.isUsable();
  
  return false;
};

export const useTrueCaller = ({
  androidClientId,
  androidButtonColor,
  androidButtonStyle,
  androidButtonText,
  androidButtonTextColor,
  androidConsentHeading,
  androidFooterButtonText,
}: IUseTruecaller) => {
  const [user, setUser] = useState<IUser | null>(null);

  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (Platform.OS !== 'android' || !androidClientId) return;

    DeviceEventEmitter.addListener(
      TRUECALLER_ANDROID_EVENTS.TRUECALLER_SUCCESS,
      ({ authorizationCode, codeVerifier }) => {
        axios
          .post(
            'https://oauth-account-noneu.truecaller.com/v1/token',
            //TODO Constants
            {
              grant_type: 'authorization_code',
              client_id: androidClientId,
              code: authorizationCode,
              code_verifier: codeVerifier,
            },
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          )
          .then((response) => {
            const accessToken = response.data.access_token;
            console.log('accessToken', accessToken)
            axios
              .get<IAndroidUserResponse>(
                'https://oauth-account-noneu.truecaller.com/v1/userinfo',
                {
                  //TODO Constants
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              )
              .then((resp) => {
                console.log('resp', resp.data)
                setUser({
                  firstName: resp.data.given_name,
                  lastName: resp.data.family_name || null,
                  mobileNumber: `+${resp.data.phone_number}`,
                  countryCode: resp.data.phone_number_country_code,
                  gender: resp.data.gender || null,
                  email: resp.data.email || null,
                  profilePicture: resp.data.picture || null,
                })
              });

            //TODO create fixed user interface.

          })
          .catch(() => {
            //TODO error handling

          });
      }
    );

    DeviceEventEmitter.addListener(
      TRUECALLER_ANDROID_EVENTS.TRUECALLER_FAILURE,
      ({ errorMessage: errorMessageAndroid, errorCode: errorCodeAndroid }) => {
        setError(errorMessageAndroid);
        setErrorCode(errorCodeAndroid);
      }
    );
  }, [androidClientId]);


  //TODO IOS implementation

  // useEffect(() => {
  //   if (Platform.OS !== 'ios' || !iosAppKey || !iosAppLink) return;

  //   const eventEmitter = new NativeEventEmitter(TruecallerIOS);

  //   eventEmitter.addListener(
  //     TRUECALLER_IOS_EVENTS.TRUECALLER_FAILURE,
  //     ({ errorMessage: errorMessageIOS, errorCode: errorCodeIOS }) => {
  //       setError(errorMessageIOS);
  //       setErrorCode(errorCodeIOS);
  //     }
  //   );

  //   eventEmitter.addListener(
  //     TRUECALLER_IOS_EVENTS.TRUECALLER_SUCCESS,
  //     (profile) =>
  //       setUser({
  //         firstName: profile.firstName,
  //         lastName: profile.lastName,
  //         email: profile.email || null,
  //         countryCode: profile.countryCode,
  //         gender: IOSGender?.[profile.gender] || null,
  //         mobileNumber: profile.phoneNumber,
  //         profilePicture: profile.profilePicture || null,
  //       })
  //   );
  // }, [iosAppKey, iosAppLink]);

  return {
    initializeTruecaller: () =>
      initialize({
        androidButtonColor,
        androidButtonStyle,
        androidButtonText,
        androidButtonTextColor,
        androidConsentHeading,
        androidFooterButtonText,
      }),
    openTruecallerModal,
    isTruecallerSupported,
    error,
    errorCode,
    user,
  };
};

export {
  TRUECALLER_ANDROID_CUSTOMIZATIONS,
  TRUECALLER_ANDROID_EVENTS,
} from '../constants/truecallerConstant';



// import { useEffect, useState } from 'react';
// import { NativeModules, DeviceEventEmitter, Platform } from 'react-native';
// import axios from 'axios';

// import {
//   type IAndroidUserResponse,
//   type IInitializeTruecaller,
//   type IUser,
//   type IUseTruecaller,
// } from '../constants/truecallerInterface';

// import {
//   TRUECALLER_ANDROID_CUSTOMIZATIONS,
//   TRUECALLER_ANDROID_EVENTS,
//   DEFAULT_BUTTON_COLOR,
//   DEFAULT_BUTTON_TEXT_COLOR,
// } from '../constants/truecallerConstant';

// const TruecallerAndroid = NativeModules.TrueCallerAndroidModule;

// const initialize = ({
//   androidButtonColor,
//   androidButtonTextColor,
//   androidButtonStyle,
//   androidButtonText,
//   androidFooterButtonText,
//   androidConsentHeading,
// }: IInitializeTruecaller) => {
//   if (Platform.OS === 'android') {
//     TruecallerAndroid.initialize(
//       androidButtonColor || DEFAULT_BUTTON_COLOR,
//       androidButtonTextColor || DEFAULT_BUTTON_TEXT_COLOR,
//       androidButtonText || TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_TEXTS.ACCEPT,
//       androidButtonStyle || TRUECALLER_ANDROID_CUSTOMIZATIONS.BUTTON_STYLES.ROUND,
//       androidFooterButtonText || TRUECALLER_ANDROID_CUSTOMIZATIONS.FOOTER_BUTTON_TEXTS.ANOTHER_METHOD,
//       androidConsentHeading || TRUECALLER_ANDROID_CUSTOMIZATIONS.CONSENT_HEADING_TEXTS.CHECKOUT_WITH
//     );
//   } else {
//     // Handle non-Android platform errors
//     console.error("Truecaller initialization is only available on Android.");
//   }
// };

// const openTruecallerModal = () => {
//   if (Platform.OS === 'android') {
//     TruecallerAndroid.invoke();
//   } else {
//     console.log('iOS modal not yet implemented');
//   }
// };

// const isTruecallerSupported = () => Platform.OS === 'android' && TruecallerAndroid.isUsable();

// const getAccessToken = async (androidClientId, authorizationCode, codeVerifier) => {
//   try {
//     const response = await axios.post(
//       'https://oauth-account-noneu.truecaller.com/v1/token',
//       {
//         grant_type: 'authorization_code',
//         client_id: androidClientId,
//         code: authorizationCode,
//         code_verifier: codeVerifier,
//       },
//       {
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       }
//     );
//     return response.data.access_token;
//   } catch (error) {
//     console.error('Error fetching access token:', error);
//     throw error;
//   }
// };

// const getUserInfo = async (accessToken) => {
//   try {
//     const response = await axios.get<IAndroidUserResponse>(
//       'https://oauth-account-noneu.truecaller.com/v1/userinfo',
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user info:', error);
//     throw error;
//   }
// };

// export const useTrueCaller = ({
//   androidClientId,
//   androidButtonColor,
//   androidButtonStyle,
//   androidButtonText,
//   androidButtonTextColor,
//   androidConsentHeading,
//   androidFooterButtonText,
// }: IUseTruecaller) => {
//   const [user, setUser] = useState<IUser | null>(null);
//   const [errorCode, setErrorCode] = useState<number | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (Platform.OS !== 'android' || !androidClientId) return;

//     const onSuccess = async ({ authorizationCode, codeVerifier }) => {
//       try {
//         const accessToken = await getAccessToken(androidClientId, authorizationCode, codeVerifier);
//         const userInfo = await getUserInfo(accessToken);

//         setUser({
//           firstName: userInfo.given_name,
//           lastName: userInfo.family_name || null,
//           mobileNumber: `+${userInfo.phone_number}`,
//           countryCode: userInfo.phone_number_country_code,
//           gender: userInfo.gender || null,
//           email: userInfo.email || null,
//           profilePicture: userInfo.picture || null,
//         });
//       } catch (error) {
//         setError('Failed to retrieve user data');
//       }
//     };

//     const onFailure = ({ errorMessage: errorMessageAndroid, errorCode: errorCodeAndroid }) => {
//       setError(errorMessageAndroid);
//       setErrorCode(errorCodeAndroid);
//     };

//     DeviceEventEmitter.addListener(TRUECALLER_ANDROID_EVENTS.TRUECALLER_SUCCESS, onSuccess);
//     DeviceEventEmitter.addListener(TRUECALLER_ANDROID_EVENTS.TRUECALLER_FAILURE, onFailure);

//     return () => {
//       DeviceEventEmitter.removeListener(TRUECALLER_ANDROID_EVENTS.TRUECALLER_SUCCESS, onSuccess);
//       DeviceEventEmitter.removeListener(TRUECALLER_ANDROID_EVENTS.TRUECALLER_FAILURE, onFailure);
//     };
//   }, [androidClientId]);

//   return {
//     initializeTruecaller: () =>
//       initialize({
//         androidButtonColor,
//         androidButtonStyle,
//         androidButtonText,
//         androidButtonTextColor,
//         androidConsentHeading,
//         androidFooterButtonText,
//       }),
//     openTruecallerModal,
//     isTruecallerSupported,
//     error,
//     errorCode,
//     user,
//   };
// };

// export {
//   TRUECALLER_ANDROID_CUSTOMIZATIONS,
//   TRUECALLER_ANDROID_EVENTS,
// } from '../constants/truecallerConstant';
