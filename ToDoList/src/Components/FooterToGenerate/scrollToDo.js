/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const ScrollToDo = ({text}) => {
    console.log(text);
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>{text}</Text>
            </ScrollView>
        </View>
    );
};
export default ScrollToDo;

const styles = StyleSheet.create({
    container :{
        flex: 8,
        backgroundColor: 'pink',
    },
})
