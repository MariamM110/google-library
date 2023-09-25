import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {theme} from '../utils/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchTabScreenProps} from '../types';
import {Text} from '../components/Text';
import type {GoogleBook, Item} from '../bookTypes';

type Props = SearchTabScreenProps<'SearchPage'>;

const categories = [
  'Fiction',
  'Non-fiction',
  'Historical Fiction',
  'Science fiction',
  'History',
  'Poetry',
  'Romance',
  'Horror',
  'Mystery',
  'Fantasy',
  'Young adult',
  'Memoir',
  "Children's literature",
  'Biography',
  'Literary fiction',
  'Self-help book',
  'Thriller',
  'Short story',
  'Graphic novel',
  'Humor',
  'Action fiction',
  'Paranormal romance',
  'Crime fiction',
  'Drama',
];

const beigeShades = [
  theme.colourBeigeP20,
  theme.colourBeigeP30,
  theme.colourBeigeP40,
  theme.colourBeigeP50,
  theme.colourBeigeP60,
];

export const Search: React.FC<Props> = ({navigation}) => {
  const [currentCategory, setCategory] = useState('Fiction');
  const [categoryBooks, setCurrentBooks] = useState<Item[]>([]);
  const [searched, setSearched] = useState<Item[]>([]);
  const [isSearchTriggered, setSearchTriggered] = useState(false);

  const handleCategoryPress = (category: string) => {
    setCategory(category);
  };

  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=fiction${currentCategory}`;

    const fetchData = async () => {
      try {
        const response = await axios.get<GoogleBook>(apiUrl);
        setCurrentBooks(response.data.items);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentCategory]);

  const onSearch = React.useCallback(async (keyWord: string) => {
    if (!keyWord) {
      setSearched([]);
      return setSearchTriggered(false);
    }
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${keyWord}`;
    try {
      const response = await axios.get<GoogleBook>(searchUrl);
      setSearched(response.data.items);
    } catch (error) {
      console.log('Error fetching data:', error);
      setSearched([]);
    }
  }, []);

  const handleSearch = () => {
    setSearchTriggered(!isSearchTriggered);
  };

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
  console.log();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchSection}>
        <MaterialCommunityIcons
          style={styles.searchIcon}
          name="magnify"
          size={20}
          color={theme.colourWhite}
        />
        <TextInput
          editable
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={theme.colourWhite}
          onChangeText={text => onSearch(text)}
          onSubmitEditing={handleSearch}
          clearButtonMode="always"
          clearTextOnFocus
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tagsContainer}
        contentContainerStyle={styles.tagsContentContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryPress(category)}
            style={
              category === currentCategory
                ? [
                    styles.tagButton,
                    {
                      borderWidth: 2,
                      borderColor: beigeShades[index % beigeShades.length],
                    },
                  ]
                : [
                    styles.tagButton,
                    {
                      backgroundColor: beigeShades[index % beigeShades.length],
                    },
                  ]
            }>
            <Text
              style={
                category === currentCategory
                  ? [
                      styles.tagText,
                      {
                        color: beigeShades[index % beigeShades.length],
                      },
                    ]
                  : [
                      styles.tagText,
                      {
                        color: theme.colourWhite,
                      },
                    ]
              }>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={isSearchTriggered ? searched : categoryBooks}
        keyExtractor={book => book.id}
        numColumns={2}
        style={styles.booksContainer}
        contentContainerStyle={styles.booksContentContainer}
        renderItem={({item: book}) => (
          <TouchableOpacity
            style={styles.categoryList}
            onPress={() => navigation.navigate('Book', {book: book})}>
            <Image
              source={{
                uri: ensureHttps(book.volumeInfo.imageLinks.smallThumbnail),
              }}
              style={styles.img}
            />
            <View style={styles.categoryContainer}>
              <View style={styles.categoryTextContainer}>
                <Text>{book.volumeInfo.title}</Text>
                <Text>{formatAuthors(book.volumeInfo.authors)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colourWhite,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colourBeige,
    borderRadius: 10,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    shadowColor: theme.colourShadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  searchIcon: {
    padding: 8,
    paddingRight: 0,
  },
  closeIcon: {padding: 8},
  input: {
    flex: 1,
    padding: 14,
    color: theme.colourWhite,
  },
  tagsContainer: {
    flexGrow: 0,
  },
  tagsContentContainer: {
    marginTop: 14,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  tagButton: {
    borderRadius: 10,
    margin: 4,
    paddingVertical: 6,
  },
  tagText: {
    paddingHorizontal: 10,
  },
  categoryList: {
    backgroundColor: theme.colourLightGreen,
    margin: 10,
    marginBottom: 60,
    borderRadius: 10,
    padding: 10,
    width: 160,
    height: 240,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  img: {
    width: 120,
    height: 170,
    borderRadius: 10,
    borderColor: 'black',
    position: 'absolute',
    top: -46,
    zIndex: 2,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  categoryTextContainer: {
    padding: 10,
    width: 160,
  },
  booksContainer: {
    flex: 1,
    padding: 10,
  },
  booksContentContainer: {
    paddingTop: 50,
    marginBottom: 90,
  },
});
