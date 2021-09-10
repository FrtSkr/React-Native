/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.style';
import SoldOutCard from './SoldOutCard';
const SongCard = ({song}) => {
    return (
        <View style={styles.container}>
        <Image style={styles.img} source={{uri: song.imageUrl}}/>
            <View style={styles.body}>
                <Text style={styles.title}>{song.title}</Text>                
                <View style={styles.inner_container}>
                    <View style={styles.info_container}>
                        <Text style={styles.artist}>{song.artist}</Text>
                        <Text style={styles.year}>{song.year}</Text>
                    </View>
                        {song.isSoldOut && <SoldOutCard />}
                </View>
                <View  style={styles.album_info}>
                <Text style={styles.album}>{song.album}</Text>
                </View>
            </View>
        </View>
    );
};

export default SongCard;
