import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {theme} from '../utils/themes';
import {CustomText} from '../components/Text';

export function Welcome({navigation}) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/img/girl-reading.jpg')}
      style={styles.img}>
      <View style={styles.container}>
        <CustomText style={styles.title}>Welcome!</CustomText>
        <CustomText style={styles.subCustomText}>
          Turn to the next page to see what book is the hot topic of today!
        </CustomText>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detail')}>
          <CustomText style={styles.buttonCustomText}>Continue</CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 40,
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.colourPrimaryGreen,
    marginTop: 20,
  },
  subCustomText: {
    fontSize: 16,
    color: theme.colourPrimaryGreen,
    marginTop: 12,
  },
  button: {
    padding: 10,
    marginTop: 12,
    backgroundColor: theme.colourDarkerGreen,
    elevation: 8,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '100%',
  },
  buttonCustomText: {
    fontSize: 16,
    color: theme.colourWhite,
    fontWeight: '700',
  },
});
