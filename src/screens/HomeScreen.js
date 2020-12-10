import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          title='Go to Details'
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemId: 33,
              otherParam: 'Wansa ',
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
