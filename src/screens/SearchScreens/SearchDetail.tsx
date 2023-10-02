import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type {AccountTabScreenProps, SearchTabScreenProps} from '../../types';
import {Text} from '../../components/Text';
import {theme} from '../../utils/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Item} from '../../bookTypes';
import {useBookmark} from '../../context/bookmarkContext';

type Props = SearchTabScreenProps<'Book'> | AccountTabScreenProps<'Book'>;

export const SearchDetail: React.FC<Props> = ({route}) => {
  const {book} = route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {addBookToBookmark} = useBookmark();

  function ensureHttps(url: string) {
    if (url && url.startsWith('http://')) {
      return url.replace('http://', 'https://');
    }
    return url;
  }

  function formatAuthors(authors: string[]) {
    if (!authors) {
      return 'Author Not Available';
    }
    if (authors.length > 1) {
      return authors.slice(0, 2).join(', ') + ' ...';
    }
    return authors;
  }

  const saveBook = async (currentBook: Item) => {
    try {
      const bookId = currentBook.id;
      const bookJson = JSON.stringify(currentBook);
      await AsyncStorage.setItem(`savedBookKey_${bookId}`, bookJson);
      setIsBookmarked(true);
      console.log('Book saved successfully!');
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  const renderHeader = React.useCallback(() => {
    return (
      <>
        <LinearGradient
          colors={[theme.colourGreenPastel, theme.colourBeingPastel]}
          style={styles.bookContainer}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <Image
            source={{
              uri: ensureHttps(book?.volumeInfo.imageLinks.smallThumbnail),
            }}
            style={styles.img}
          />
          <Text style={styles.gradientText}>{book.volumeInfo.title}</Text>
          <Text style={styles.gradientText}>
            {formatAuthors(book.volumeInfo.authors)}
          </Text>
        </LinearGradient>
        <View style={styles.infoWrapper}>
          <View style={styles.infoContentContainer}>
            <Text fontWeight="700">Genre</Text>
            <Text>{book.volumeInfo.categories}</Text>
          </View>
          <View style={styles.infoContentContainer}>
            <Text fontWeight="700">Pages</Text>
            <Text>{book.volumeInfo.pageCount}</Text>
          </View>
          <View style={styles.infoContentContainer}>
            <Text fontWeight="700">Lang</Text>
            <Text>{book.volumeInfo.language}</Text>
          </View>
        </View>
      </>
    );
  }, [
    book.volumeInfo.authors,
    book.volumeInfo.categories,
    book.volumeInfo.imageLinks.smallThumbnail,
    book.volumeInfo.language,
    book.volumeInfo.pageCount,
    book.volumeInfo.title,
  ]);

  const renderFooter = React.useCallback(() => {
    return (
      <View style={styles.footer}>
        <MaterialCommunityIcons name="heart-outline" size={20} />
        <TouchableOpacity
          style={styles.bookmarkWrapper}
          onPress={() => saveBook(book)}
          disabled={isBookmarked}>
          <Text>{isBookmarked ? 'Added to bookmark' : 'Add to bookmark'}</Text>
          <MaterialCommunityIcons
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={20}
          />
        </TouchableOpacity>
      </View>
    );
  }, [book, isBookmarked]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        {renderHeader()}
        <View style={styles.descContainer}>
          <Text>{book.volumeInfo.description}</Text>
        </View>
      </ScrollView>
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 120,
    height: 170,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  gradientText: {
    marginBottom: 10,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colourWhite,
    paddingVertical: 8,
  },
  infoContentContainer: {
    alignItems: 'center',
    gap: 5,
  },
  descContainer: {
    paddingHorizontal: 20,
    backgroundColor: theme.colourWhite,
    paddingBottom: 100,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: theme.colourGreenPastel,
    padding: 16,
    paddingLeft: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bookmarkWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
});
