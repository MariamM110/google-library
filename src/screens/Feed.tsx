import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Text} from '../components/Text';
import {
  Image,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {API_KEY} from '@env';
import {Book, NYTResp} from '../nytTypes';
import {theme} from '../utils/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import type {FeedTabScreenProps} from '../types';

export function Feed({navigation}: FeedTabScreenProps<'FeedPage'>) {
  const [currentFeed, setCurrentFeed] = useState<Book[]>([]);

  useEffect(() => {
    const apiUrl =
      'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=';

    const fetchData = async () => {
      try {
        const response = await axios.get<NYTResp>(apiUrl + API_KEY);
        const lists = response.data.results.lists;

        const allBooks = lists
          .map(list => {
            return list.books;
          })
          .flat();

        setCurrentFeed(allBooks);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <FlatList
      data={currentFeed}
      keyExtractor={(item, index) => `${item.primary_isbn10}-${index}`}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate('Book', {book: item});
          }}>
          <Image source={{uri: item.book_image}} style={styles.img} />
          <View style={styles.column}>
            <View>
              <Text fontWeight="700" style={styles.textTitle}>
                {item.title}
              </Text>
              <Text>{item.author}</Text>
            </View>
            <View style={styles.icons}>
              <MaterialCommunityIcons name="heart-outline" size={20} />
              <MaterialCommunityIcons name="comment-outline" size={20} />
              <MaterialCommunityIcons name="bookmark-outline" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 10,
    padding: 10,
    backgroundColor: theme.colourWhite,
    borderRadius: 10,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 10,
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img: {
    width: 120,
    height: 170,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
});
