/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding: 10,
        flexDirection: 'row',
        flex: 1,
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 0.75,
        borderColor: '#DEDEDE',
    },
    body: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    inner_container: {
        flexDirection: 'row',
    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
    },
    artist: {
        marginRight: 5,
    },
    year: {
        color: 'grey',
    },
    album: {
        fontSize: 14,
        color: 'grey',
    },
    album_info: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});

export default styles;
