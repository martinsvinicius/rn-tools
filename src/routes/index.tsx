import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// components
import Home from '../screens/Home';
import ImageShare from '../screens/ImageShare';
import Notifier from '../screens/Notifier';

// assets
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home-sharp'
              : 'ios-home-outline';
          } else if (route.name === 'Image Share') {
            iconName = focused ? 'ios-image' : 'image-outline';
          } else if (route.name === 'Notifier')
            iconName = focused ? 'notifications-sharp' : 'notifications-outline'

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: {
          backgroundColor: '#202024',
          borderTopColor: 'transparent'
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Image Share" component={ImageShare} />
      <Tab.Screen name="Notifier" component={Notifier} />
    </Tab.Navigator>
  );
}
