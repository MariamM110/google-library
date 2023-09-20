import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Text} from '../components/Text';
import {View} from 'react-native';
import {API_KEY} from '@env';

export function Account() {
  // const [currentFeed, setCurrentFeed] = useState([]);

  // const apiUrl =
  //   'https://api.nytimes.com/svc/books/v3/reviews.json?title=a%20thousand%20splendid%20suns&api-key=';

  // const fetchData = async () => {
  //   try {
  //     const {data} = await axios.get(apiUrl + API_KEY);
  //     setCurrentFeed(data.results);
  //   } catch (error) {
  //     // console.log('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    // <View>
    //   {currentFeed.map(feed => (
    //     <Text>{feed.book_title}</Text>
    //   ))}
    // </View>
    <View>
      <Text>Account</Text>
    </View>
  );
}
