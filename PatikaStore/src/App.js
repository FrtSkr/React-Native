import React from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import product_data from '../product_data.json';
import ProductCard from './component/ProductCard';
import HeaderBar from './component/HeaderBar';

const App = () => {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <FlatList data={product_data} numColumns={2} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
});
export default App;
