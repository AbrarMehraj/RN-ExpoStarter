import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();
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
      {/* <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={{ title: 'Details' }}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigation;
