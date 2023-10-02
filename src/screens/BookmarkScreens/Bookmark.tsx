import React, {useEffect, useState} from 'react';
import {FlatList, View, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BookmarkTabScreenProps} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import books from '../../data/books.json';
import {theme} from '../../utils/themes';
import {Text} from '../../components/Text';
import Slider from '@react-native-community/slider';
import StarRating from 'react-native-star-rating-widget';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = BookmarkTabScreenProps<'BookmarkPage'>;

export const Bookmark: React.FC<Props> = () => {
  // const [savedBooks, setSavedBooks] = useState([]);
  const [rating, setRating] = useState(books[0].volumeInfo.averageRating);

  // const getAllSavedItems = async () => {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys();
  //     const bookKeys = keys.filter(key => key.startsWith('savedBookKey_'));
  //     const savedItems = await AsyncStorage.multiGet(bookKeys);
  //     const parsedBooks = savedItems.map(([key, value]) => JSON.parse(value));
  //     setSavedBooks(parsedBooks);
  //   } catch (error) {
  //     console.error('Error retrieving saved items:', error);
  //   }
  // };
  // console.log(savedBooks);

  // useEffect(() => {
  //   getAllSavedItems();
  // }, []);

  function ensureHttps(url: string) {
    if (url && url.startsWith('http://')) {
      return url.replace('http://', 'https://');
    }
    return url;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookContainer}>
        <Image
          source={{
            uri: ensureHttps(books[0].volumeInfo.imageLinks.smallThumbnail),
          }}
          style={styles.imgCurrent}
        />
        <View style={styles.column}>
          <View>
            <Text style={styles.textTitle}>{books[0].volumeInfo.title}</Text>
            <Text style={styles.textAuthor}>{books[0].volumeInfo.authors}</Text>
            <StarRating
              rating={books[0].volumeInfo.averageRating}
              onChange={setRating}
              emptyColor={theme.colourGreyP30}
            />
          </View>
          <Slider minimumTrackTintColor={theme.colourDarkerGreen} />
        </View>
      </View>
      <FlatList
        data={books.slice(1)}
        renderItem={({item}) => (
          <View style={styles.listContainer}>
            <View style={styles.listWrapper}>
              <Image
                source={{
                  uri: ensureHttps(item.volumeInfo.imageLinks.smallThumbnail),
                }}
                style={styles.imgList}
              />
              <View style={styles.column}>
                <Text>{item.volumeInfo.title}</Text>
                <Text>{item.volumeInfo.authors}</Text>
                <StarRating
                  rating={books[0].volumeInfo.averageRating}
                  onChange={setRating}
                  emptyColor={theme.colourGreyP30}
                  starSize={20}
                />
              </View>
            </View>

            <View style={styles.bookmarkWrapper}>
              <MaterialCommunityIcons
                name="bookmark"
                color={theme.colourWhite}
                size={18}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colourWhite,
    padding: 20,
  },
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 36,
  },
  column: {
    marginLeft: 14,
    gap: 6,
  },
  imgCurrent: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  textAuthor: {
    color: theme.colourGreyP40,
    marginBottom: 10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: theme.colourGreyP30,
  },
  listWrapper: {
    flexDirection: 'row',
  },
  imgList: {
    width: 70,
    height: 100,
    borderRadius: 10,
  },
  bookmarkWrapper: {
    alignSelf: 'center',
    padding: 6,
    backgroundColor: theme.colourDarkerGreen,
    borderRadius: 25,
    marginRight: 10,
  },
});
