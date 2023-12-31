import * as React from 'react';
import {Text} from '../../components/Text';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AccountTabScreenProps} from '../../types';
import {TouchableButton} from '../../components/Button';
import {theme} from '../../utils/themes';
import userData from '../../data/userData.json';

type Props = AccountTabScreenProps<'AccountPage'>;

export const Account: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../assets/img/leaves.jpg')}
          style={styles.backgroundImg}
        />
        <Image
          source={require('../../../assets/img/profile-pic.jpg')}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.profileWrapper}>
        <Text style={styles.profileName}>{userData[0].username}</Text>
        <Text style={styles.profileName}>{userData[0].bio}</Text>
        <TouchableButton style={styles.editButton}>
          <Text style={styles.buttonText}>Edit profile</Text>
        </TouchableButton>
      </View>
      <View style={styles.followWrapper}>
        <TouchableOpacity
          style={styles.followContainer}
          onPress={() => navigation.navigate('Follows', {state: 'followers'})}>
          <Text>Followers</Text>
          <Text>{userData[0].followers}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.followContainer}
          onPress={() => navigation.navigate('Follows', {state: 'following'})}>
          <Text>Following</Text>
          <Text>{userData[0].following}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.followContainer}
          onPress={() => navigation.navigate('Follows', {state: 'books'})}>
          <Text>Books</Text>
          <Text>{userData[0].books}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.descContainer}>
        <View style={styles.itemsContainer}>
          <Image
            source={require('../../../assets/img/book.png')}
            style={styles.itemImg}
          />
          <View>
            <Text fontWeight="700">Favourite Book</Text>
            <Text>{userData[0].favBook}</Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <Image
            source={require('../../../assets/img/user.png')}
            style={styles.itemImg}
          />
          <View>
            <Text fontWeight="700">Favourite Author</Text>
            <Text>{userData[0].favAuthor}</Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <Image
            source={require('../../../assets/img/category.png')}
            style={styles.itemImg}
          />
          <View>
            <Text fontWeight="700">Favourite genre</Text>
            <Text>{userData[0].favCategory}</Text>
          </View>
        </View>
        <View style={styles.itemsContainer}>
          <Image
            source={require('../../../assets/img/time.png')}
            style={styles.itemImg}
          />
          <View>
            <Text fontWeight="700">Currently reading</Text>
            <Text>{userData[0].current}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colourWhite,
  },
  imgContainer: {
    margin: 10,
    marginBottom: 74,
    position: 'relative',
  },
  backgroundImg: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  profileImg: {
    width: 100,
    height: 120,
    borderRadius: 10,
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
  },
  profileWrapper: {
    marginBottom: 16,
  },
  profileName: {
    textAlign: 'center',
    marginBottom: 10,
  },
  editButton: {
    borderRadius: 10,
    marginHorizontal: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colourWhite,
  },
  followWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 26,
  },
  followContainer: {
    backgroundColor: theme.colourWhite,
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
    shadowColor: theme.colourGreyP20,
    shadowOffset: {width: -1, height: 6},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  descContainer: {
    marginHorizontal: 18,
  },
  descItems: {
    padding: 10,
    backgroundColor: theme.colourLightGreen,
    borderRadius: 25,
  },
  itemsContainer: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: theme.colourGreenPastel,
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
  },
  itemImg: {
    marginLeft: 10,
    alignSelf: 'center',
  },
});
