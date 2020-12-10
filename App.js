import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer as Router } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import { Text } from 'react-native';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

function LogoTitle() {
  return <Text>HomeScreen</Text>;
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        >
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name='Details'
            component={DetailsScreen}
            options={{ title: 'Details' }}
          />
        </Stack.Navigator>
      </Router>
    );
  }
}
