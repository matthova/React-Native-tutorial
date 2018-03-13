import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import AlbumList from './components/AlbumList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Header>Albums</Header>
    <AlbumList />
  </View>
);

export default App;
