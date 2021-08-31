/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
  },
    body: {
        padding: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
        marginBottom: 3,
    },
    description:{
        fontSize: 12,
        margin: 5,
        marginTop: 3,
    },
    author:{
        fontWeight: 'bold',
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 13,
    },
});
export default styles;
