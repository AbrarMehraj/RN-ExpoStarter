import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const data = [
  {
    id: '1',
    subject: 'Science',
    topic: 'Protons',
    date: '25 jan 2020',
    image: '',
    work: 'Homework',
  },
  {
    id: '2',
    subject: 'Physics',
    topic: 'Protons',
    date: '25 jan 2020',
    image: '',
    work: 'Homework',
  },
  {
    id: '3',
    subject: 'Chemistry',
    topic: 'Amino Acids',
    date: '25 jan 2020',
    image: '',
    work: 'Homework',
  },
  {
    id: '4',
    subject: 'Mathematics',
    topic: 'Algebra',
    date: '25 jan 2020',
    image: '',
    work: 'Homework',
  },
];

const ToDo = () => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          {data.map((item) => {
            return (
              <View style={styles.card}>
                <View style={styles.cardLeft}>
                  <View style={styles.innerBox}>
                    <Text style={styles.subject}>{item.subject}</Text>
                    <Text style={styles.work}>{item.work}</Text>
                  </View>
                  <Text style={styles.topic}>{item.topic}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={styles.cardRight}>
                  <Image
                    style={styles.image}
                    source={require('../../images/science.jpeg')}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '91%',
    width: '100%',
    padding: 15,
    backgroundColor: 'whitesmoke',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    width: '100%',
    backgroundColor: 'white',
    // padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    height: 130,
    overflow: 'hidden',
  },
  cardLeft: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },

  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },
  cardRight: {},
  image: {
    height: '100%',
    width: 130,
    overflow: 'hidden',
  },

  subject: {
    color: 'blue',
    fontSize: 16,
    marginRight: 10,
  },

  work: {
    backgroundColor: 'lightgrey',
    fontSize: 10,
    padding: 3,
    borderRadius: 3,
  },
  topic: {
    marginVertical: 20,
  },
  date: {
    color: 'grey',
  },
});

export default ToDo;
