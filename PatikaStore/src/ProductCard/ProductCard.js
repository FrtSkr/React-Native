/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
    const instock = product.inStock;
    const textStockValue = instock === false ? 'Stokta Yok' : 'Stokta Var';
    const color = instock === false ? 'red' : 'green';
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.imgURL}}/>
            <View style={styles.body}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={[styles.instock, {color}]}>{textStockValue}</Text>
            </View>
        </View>
    );
};
export default ProductCard;
