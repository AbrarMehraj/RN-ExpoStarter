import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from '../../Navigation/BottomNavigation';
import Completed from './Completed';
import InReview from './InReview';
import OverDue from './OverDue';
import ToDo from './ToDo';
import TopList from './TopList';

const HomeScreen = () => {
  const [selectedItem, setSelectedItem] = useState({
    id: '1',
    title: 'Overdue',
  });
  return (
    <View style={styles.container}>
      <TopList setSelectedItem={setSelectedItem} selectedItem={selectedItem} />

      {selectedItem.id === '1' && <OverDue />}
      {selectedItem.id === '2' && <ToDo />}
      {selectedItem.id === '3' && <InReview />}
      {selectedItem.id === '4' && <Completed />}

      <BottomNavigation />
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
    backgroundColor: 'green',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 50,
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
