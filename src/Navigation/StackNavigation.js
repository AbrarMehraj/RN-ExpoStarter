import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        options={{ title: 'HomeScreen' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
