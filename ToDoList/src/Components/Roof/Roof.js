/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Roof.styles';
const Roof = () => {    
    const [counter, setCounter] = useState(0);
    return (
        <View style={styles.container}>
        <View style={styles.inner_container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.counter}>{0}</Text>
        </View>
        </View>
    );
};
export default Roof;
