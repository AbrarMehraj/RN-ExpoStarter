import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Feed from '../screens/Feed';
import Setting from '../screens/Setting';
import { Text, View } from 'react-native';

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
        options={{
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              <Text style={{ marginRight: 10 }}>Search</Text>
              <Text>Filter</Text>
            </View>
          ),
        }}
      />

      <Stack.Screen name='Feed' component={Feed} />
      <Stack.Screen name='Setting' component={Setting} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
