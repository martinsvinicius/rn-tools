import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: 40
        }}>
        Testing some <Text style={{ color: '#8257e6' }}>React Native</Text>{' '}
        features with <Text style={{ color: '#8257e6' }}>Expo</Text>
      </Text>
    </View>
  );
}
