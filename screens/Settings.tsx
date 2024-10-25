import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Discover/Header';
import Assets from '../constants/images';
import SwitchDescription from '../components/SwitchDescription';
import CustomButton from '../components/Auth/SignIn/CustomButton';

const Settings = () => {
  const [notification, setNotification] = useState(false);
  const [popups, setPopups] = useState(false);
  const [orderHistory, setOrderHistory] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Settings" Searchasset={Assets.search} />
      <Text
        style={{
          fontSize: 16,
          color: '#352641',
          fontWeight: '600',
          marginTop: '8%',
          marginHorizontal: '8%',
        }}>
        Your App Settings
      </Text>
      <View
        style={{
          marginTop: '6%',
          rowGap: 50,
        }}>
        <SwitchDescription
          value={notification}
          setValue={setNotification}
          title="Notification"
          SubTitle="Receive notifications on latest offers and store updates"
        />
        <SwitchDescription
          value={popups}
          setValue={setPopups}
          title="Popups"
          SubTitle="Disable all popups and adverts from third party vendors"
        />
        <SwitchDescription
          value={orderHistory}
          setValue={setOrderHistory}
          title="Order History"
          SubTitle="Keep your order history on the app unless manually removed"
        />
      </View>
      <CustomButton
        text="Update Settings"
        customStyles={{
          width: '80%',
          height: '6.5%',
          borderRadius: 50,
          marginTop: '15%',
          alignSelf: 'center',
        }}
        textStyle={{
          textTransform: 'uppercase',
          fontSize: 14,
        }}
        onPress={() => Alert.alert('Settings Updated')}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
