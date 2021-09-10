import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';
import news_data from '../news_data.json';
import NewsCard from './components/NewsCard';
import Banner from './components/Banner';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const bannerImg = () => <Banner />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>News</Text>
      </View>
      <FlatList
        keyExtractor={item => item.u_id}
        ListHeaderComponent={bannerImg}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  header_container: {
    backgroundColor: 'black',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 15,
    color: 'white',
  },
});
