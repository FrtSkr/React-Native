/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Generate.style';
import ScrollToDo from './scrollToDo';

const Generate = () => {
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputText}
            placeholder="Yapılacak..."
            placeholderTextColor="white"
            onChangeText={(text) => setInputText(text)}
            />
            <View style={styles.inner_container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.button_title}>Kaydet</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};
export default Generate;