import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {theme} from '../utils/themes';

export function Welcome({navigation}) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/img/girl-reading.jpg')}
      style={styles.img}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subText}>
          Turn to the next page to see what book is the hot topic of today!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Continue</Text>
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
  subText: {
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
  buttonText: {
    fontSize: 16,
    color: theme.colourWhite,
    fontWeight: '700',
  },
});
