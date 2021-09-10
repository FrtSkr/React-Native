/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SoldOutCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TÜKENDİ</Text>
        </View>
    );
};
export default SoldOutCard;

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 1,
        padding: 5,
    },
    title: {
        color: 'red',
        fontSize: 12,
    }
})