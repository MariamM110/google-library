import * as React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {CustomText} from '../components/Text';
import {View} from 'react-native';
import {API_KEY} from '@env';

interface Book {
  // Define the structure of a book here based on the API response
  // For example:
  title: string;
  author: string;
  // ... other properties
}

export function Feed() {
  const [currentFeed, setCurrentFeed] = useState([]);

  useEffect(() => {
    const apiUrl =
      'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=';

    const fetchData = async () => {
      try {
        const {data} = await axios.get(apiUrl + API_KEY);
        const allBooks = [];

        data.lists.array.forEach(element => {
          console.log('hi');
        });

        // data?.lists?.map(list => {
        //   allBooks.push(list);
        //   list?.books?.forEach(book => {
        //     allBooks.push({
        //       title: book.title,
        //       author: book.author,
        //     });
        //   });
        // });

        setCurrentFeed(data);
        // setCurrentFeed(allBooks);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //   console.log(currentFeed);
  return (
    <View>
      {/* {currentFeed.map(book => (
        <CustomText key={book.title}>{book.title}</CustomText>
      ))} */}
    </View>
  );
}

// async componentDidMount() {
//   try {
//     const { data } = await axios.get('https://api.example.com/data');
//     this.setState({ data });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }
