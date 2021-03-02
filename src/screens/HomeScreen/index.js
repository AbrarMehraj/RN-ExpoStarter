import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
