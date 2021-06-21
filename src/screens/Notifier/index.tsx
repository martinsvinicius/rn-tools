import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import {
  AndroidImportance,
  getExpoPushTokenAsync,
  getPermissionsAsync,
  requestPermissionsAsync,
  setNotificationChannelAsync,
} from 'expo-notifications';

import { View, Text } from 'react-native';

import { styles } from './styles';

export default function Notifier() {
  const [token, setToken] = useState<string | null>();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(() => {
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notifications');
      return;
    }

    const token = (await getExpoPushTokenAsync()).data;
    setToken(token);

    if (Platform.OS === 'android') {
      setNotificationChannelAsync('default', {
        showBadge: true,
        name: 'default',
        importance: AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.defaultText}>
        Copy this token
      </Text>

      <Text selectable={true} style={styles.token}>{token}</Text>

      <Text style={styles.defaultText}>and send notifications with Expo Push Notifications Tools</Text>
    </View>
  );
}
