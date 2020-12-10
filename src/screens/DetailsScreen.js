import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DetailsScreen</Text>

        <Button
          title='Go to HomeScreen'
          onPress={() => this.props.navigation.push('Details')}
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
export default DetailsScreen;
