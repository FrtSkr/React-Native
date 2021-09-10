import React, {useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView, View} from 'react-native';
import musicData from './music-data.json';
import SongCard from './Components/SongCard';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [music_data, setMusic_Data] = useState(musicData);
  const renderSong = ({item}) => <SongCard song={item} />;
  const itemSeparator = () => <View style={styles.separator} />;

  const handleSearch = text => {
    const filtredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      const currentArtist = song.artist.toLowerCase();

      if (currentArtist.indexOf(searchedText) > -1)
        return currentArtist.indexOf(searchedText) > -1;
      if (currentTitle.indexOf(searchedText) > -1)
        return currentTitle.indexOf(searchedText) > -1;
    });
    setMusic_Data(filtredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={music_data}
        renderItem={renderSong}
        ItemSeparatorComponent={itemSeparator}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#dedede',
  },
});
