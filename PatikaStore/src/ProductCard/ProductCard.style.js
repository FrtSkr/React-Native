/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width / 2.2,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 9,
    },
    image:{
        height: Dimensions.get('window').width / 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    body: {
        padding: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        marginBottom: 3,
    },
    price: {
        color: '#707070',
        fontSize: 15,
        margin: 5,
        marginTop: 3,
    },
    instock:{
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
        marginTop: 3,
    },

});
export default styles;