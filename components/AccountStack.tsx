
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Account from '../screens/Account';
import SignIn from '../screens/Auth/SignIn';


export type AccountStackParamList = {
    Account:undefined
    SignIn:undefined
    }

const stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => {
  return (
    <stack.Navigator
    screenOptions={
        {
            headerShown:false
        }
    }
    >
        <stack.Screen name="Account" component={Account} />
        <stack.Screen name="SignIn" component={SignIn} />
    </stack.Navigator>
    
  )
}

export default AccountStack
