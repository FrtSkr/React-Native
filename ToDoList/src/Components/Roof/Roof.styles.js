/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner_container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#dedede',
    },
    title: {
        fontSize: 35,
        color: '#FFA737',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    counter: {
        fontSize: 35,
        color: '#FFA737',
        fontWeight: 'bold',
    },
});
export default styles;
