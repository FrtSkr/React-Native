/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './HeaderBar.style';

const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>PATIKASTORE</Text>
            <View style={styles.search_body}>
                <TextInput style={styles.search} placeholder="Ara..." />
            </View>
        </View>
    );
};
export default HeaderBar;
