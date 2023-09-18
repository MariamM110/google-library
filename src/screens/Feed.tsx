import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {CustomText} from '../components/Text';
import {Image, FlatList, View} from 'react-native';
import {API_KEY} from '@env';
import {Book, NYTResp} from '../types';

export function Feed() {
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
        <View style={{backgroundColor: 'red', marginBottom: 10}}>
          <CustomText>{item.title}</CustomText>
          <CustomText>{item.author}</CustomText>
          <Image
            source={{uri: item.book_image}}
            style={{width: 100, height: 150}}
          />
        </View>
      )}
    />
  );
}
