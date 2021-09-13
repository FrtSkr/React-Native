import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Roof from './Components/Roof';
import Generate from './Components/FooterToGenerate';

const App = () => {
  return (
    <View style={styles.container}>
      <Roof />
      <Generate />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
