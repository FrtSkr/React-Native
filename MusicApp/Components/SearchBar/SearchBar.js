/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({onSearch}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            placeholder= "Ara ..." 
            style={styles.inputText}
            onChangeText= {onSearch}
            />
        </View>
    );
};
export default SearchBar;
