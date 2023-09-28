import React from 'react';
import {useState} from 'react';
import {Text} from '../../components/Text';
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {AccountTabScreenProps} from '../../types';
import {theme} from '../../utils/themes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import followers from '../../data/followers.json';
import books from '../../data/books.json';

type Props = AccountTabScreenProps<'Follows'>;

export const Follows: React.FC<Props> = ({navigation, route}) => {
  const state = route.params;
  const [tab, setTab] = useState(state.state);

  function ensureHttps(url: string) {
    if (url && url.startsWith('http://')) {
      return url.replace('http://', 'https://');
    }
    return url;
  }

  const renderFollowing = React.useCallback(() => {
    return (
      <FlatList
        data={followers}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.followerContainer}
            onPress={() => navigation.navigate('Users', {user: item})}>
            <Image
              source={require('../../../assets/img/profile-pic.jpg')}
              style={styles.img}
            />
            <View style={styles.followerText}>
              <Text fontWeight="700">{item.username}</Text>
              <Text>{item.bio}</Text>
              <Text>{item.current}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }, [navigation]);

  const renderBooks = React.useCallback(() => {
    return (
      <FlatList
        data={books}
        keyExtractor={(item, index) => `${item.volumeInfo.pageCount}-${index}`}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.followerContainer}
            onPress={() => navigation.navigate('Book', {book: item})}>
            <Image
              source={{
                uri: ensureHttps(item.volumeInfo.imageLinks.smallThumbnail),
              }}
              style={styles.imgBook}
            />
            <View style={styles.followerText}>
              <Text fontWeight="700">{item.volumeInfo.title}</Text>
              <Text>{item.volumeInfo.authors}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchSection}>
        <MaterialCommunityIcons
          style={styles.searchIcon}
          name="magnify"
          size={20}
          color={theme.colourLightGrey}
        />
        <TextInput
          editable
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={theme.colourLightGrey}
          //   onChangeText={text => onSearch(text)}
          //   onSubmitEditing={handleSearch}
          clearButtonMode="always"
          clearTextOnFocus
        />
      </View>
      <View style={styles.titleContainer}>
        <TouchableWithoutFeedback onPress={() => setTab('followers')}>
          <Text
            fontWeight="700"
            style={
              tab === 'followers'
                ? styles.tabHighlighted
                : styles.tabNotHighlighted
            }>
            Followers
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setTab('following')}>
          <Text
            fontWeight="700"
            style={
              tab === 'following'
                ? styles.tabHighlighted
                : styles.tabNotHighlighted
            }>
            Following
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setTab('books')}>
          <Text
            fontWeight="700"
            style={
              tab === 'books' ? styles.tabHighlighted : styles.tabNotHighlighted
            }>
            Books
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {tab === 'following' || tab === 'followers'
        ? renderFollowing()
        : renderBooks()}
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
    backgroundColor: theme.colourGreyP30,
    borderRadius: 10,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  searchIcon: {
    padding: 8,
    paddingRight: 0,
  },
  input: {
    flex: 1,
    padding: 14,
    color: theme.colourWhite,
  },
  titleContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabHighlighted: {
    fontSize: 16,
    color: theme.colourLightGrey,
  },
  tabNotHighlighted: {
    fontSize: 16,
    color: theme.colourGreyP40,
  },
  followerContainer: {
    flexDirection: 'row',
    gap: 20,
    margin: 10,
  },
  img: {width: 80, height: 80, borderRadius: 50},
  followerText: {
    marginTop: 10,
  },
  itemsContainer: {
    gap: 5,
    backgroundColor: theme.colourGreenPastel,
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
  },
  itemImg: {
    alignSelf: 'center',
  },
  imgBook: {width: 100, height: 140, borderRadius: 10},
});
