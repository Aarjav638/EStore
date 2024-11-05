import {useEffect, useState} from 'react';
import {NativeModules, DeviceEventEmitter, Platform} from 'react-native';
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
  if (Platform.OS === 'android') {
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
        TRUECALLER_ANDROID_CUSTOMIZATIONS.CONSENT_HEADING_TEXTS.CHECKOUT_WITH,
    );
  } else {
    // Handle non-Android platform errors
    console.error('Truecaller initialization is only available on Android.');
  }
};

const openTruecallerModal = () => {
  if (Platform.OS === 'android') {
    TruecallerAndroid.invoke();
  } else {
    console.log('iOS modal not yet implemented');
  }
};

const isTruecallerSupported = () =>
  Platform.OS === 'android' && TruecallerAndroid.isUsable();

const getAccessToken = async (
  androidClientId,
  authorizationCode,
  codeVerifier,
) => {
  try {
    const response = await axios.post(
      'https://oauth-account-noneu.truecaller.com/v1/token',
      {
        grant_type: 'authorization_code',
        client_id: androidClientId,
        code: authorizationCode,
        code_verifier: codeVerifier,
      },
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      },
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

const getUserInfo = async accessToken => {
  try {
    const response = await axios.get<IAndroidUserResponse>(
      'https://oauth-account-noneu.truecaller.com/v1/userinfo',
      {
        headers: {Authorization: `Bearer ${accessToken}`},
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
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

    const onSuccess = async ({authorizationCode, codeVerifier}) => {
      try {
        const accessToken = await getAccessToken(
          androidClientId,
          authorizationCode,
          codeVerifier,
        );
        const userInfo = await getUserInfo(accessToken);

        setUser({
          firstName: userInfo.given_name,
          lastName: userInfo.family_name || null,
          mobileNumber: `+${userInfo.phone_number}`,
          countryCode: userInfo.phone_number_country_code,
          gender: userInfo.gender || null,
          email: userInfo.email || null,
          profilePicture: userInfo.picture || null,
        });
      } catch (e) {
        setError(e);
      }
    };

    const onFailure = ({
      errorMessage: errorMessageAndroid,
      errorCode: errorCodeAndroid,
    }) => {
      setError(errorMessageAndroid);
      setErrorCode(errorCodeAndroid);
    };

    DeviceEventEmitter.addListener(
      TRUECALLER_ANDROID_EVENTS.TRUECALLER_SUCCESS,
      onSuccess,
    );
    DeviceEventEmitter.addListener(
      TRUECALLER_ANDROID_EVENTS.TRUECALLER_FAILURE,
      onFailure,
    );
  }, [androidClientId]);

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
