import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Text} from '../components/Text';
import {Image, ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../utils/themes';
import {StyleSheet} from 'react-native';
import {GoogleBook, Item} from '../bookTypes';
import type {FeedTabScreenProps} from '../types';

type Props = FeedTabScreenProps<'Book'>;

export const Book: React.FC<Props> = ({route}) => {
  const {book} = route.params;
  const [currentBook, setCurrentBook] = useState<Item[]>([]);
  const [contentType, setContentType] = useState<'description' | 'comments'>(
    'description',
  );

  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${book.primary_isbn13}`;

    const fetchData = async () => {
      try {
        const response = await axios.get<GoogleBook>(apiUrl);
        setCurrentBook(response.data.items);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const date = new Date(currentBook[0]?.volumeInfo.publishedDate);
  const year = date.getFullYear();

  function getOrdinal(n: number) {
    let ord = 'th';

    if (n % 10 === 1 && n % 100 !== 11) {
      ord = 'st';
    } else if (n % 10 === 2 && n % 100 !== 12) {
      ord = 'nd';
    } else if (n % 10 === 3 && n % 100 !== 13) {
      ord = 'rd';
    }

    return n + ord;
  }

  const renderHeader = React.useCallback(() => {
    return (
      <>
        <View style={styles.headerContainer}>
          <View style={styles.topContainer}>
            <View style={styles.viewContainer}>
              <Text fontWeight="700" style={styles.title}>
                {book.title}
              </Text>
              <Text style={styles.subText}>{book.author}</Text>
              <Text style={styles.subText}>Published {year}</Text>
              <Text style={styles.subText}>
                Category: {currentBook[0]?.volumeInfo.categories}
              </Text>
            </View>
            <View style={styles.shadowProp}>
              <Image source={{uri: book.book_image}} style={styles.img} />
            </View>
          </View>
          <View style={styles.iconsWrapper}>
            <View style={styles.titleIcons}>
              <Image
                source={require('../../assets/img/top-three.png')}
                style={styles.iconSize}
              />
              <Text>{getOrdinal(book.rank)}</Text>
            </View>
            <Text style={styles.line}>|</Text>
            <View style={styles.titleIcons}>
              <MaterialCommunityIcons
                name="note-text"
                size={20}
                color={theme.colourFreshGreen}
              />
              <Text>{currentBook[0]?.volumeInfo.pageCount}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <TouchableWithoutFeedback
            onPress={() => setContentType('description')}>
            <Text
              style={
                contentType === 'description'
                  ? styles.focused
                  : styles.unFocused
              }>
              Description
            </Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => setContentType('comments')}>
            <Text
              style={
                contentType === 'comments' ? styles.focused : styles.unFocused
              }>
              Comments
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }, [book, contentType, currentBook, year]);

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      {renderHeader()}

      {contentType === 'description' ? (
        <View style={styles.descContainer}>
          <Text>{currentBook[0]?.volumeInfo.description}</Text>
        </View>
      ) : (
        <View style={styles.descContainer}>
          <Text>Comments</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: theme.colourBeigeP10,
    padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 14,
    marginBottom: 2,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colourWhite,
    paddingVertical: 20,
  },
  viewContainer: {
    flex: 1,
  },
  TouchableButton: {
    width: 45,
    borderRadius: 10,
    marginBottom: 26,
    backgroundColor: theme.colourShadeGreen,
  },
  img: {
    width: 120,
    height: 170,
    borderRadius: 10,
    marginLeft: 8,
  },
  shadowProp: {
    shadowColor: theme.colourShadow,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 30,
    color: theme.colourGrey,
  },
  subText: {
    marginBottom: 5,
    color: theme.colourLightGrey,
  },
  line: {
    fontSize: 18,
    color: theme.colourGrey,
  },
  iconSize: {
    width: 22,
    height: 22,
  },
  titleIcons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  TouchableButtonStyle: {
    backgroundColor: 'transparent',
  },
  descContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  focused: {
    fontWeight: '800',
    fontSize: 14,
    color: theme.colourGrey,
  },
  unFocused: {
    fontWeight: '600',
    color: theme.colourLightGrey,
  },
});
