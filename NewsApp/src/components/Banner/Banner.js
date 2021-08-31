/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView} from 'react-native';
import news_banner_data from './news_banner_data.json';
import styles from './Banner.style';

const Banner = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            news_banner_data.map(bannerNews => (
             <Image style={styles.image} source={{uri: bannerNews.imageUrl}} />
            ))
        }
    </ScrollView>
  );
};
export default Banner;
