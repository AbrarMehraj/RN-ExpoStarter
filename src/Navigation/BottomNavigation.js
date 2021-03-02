import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
        <Text>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    // position: 'relative',
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
});

export default BottomNavigation;
