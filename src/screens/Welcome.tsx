import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {theme} from '../utils/themes';
import {Text} from '../components/Text';
import {TouchableButton} from '../components/Button';
import type {RootStackScreenProps} from '../types';

type Props = RootStackScreenProps<'Welcome'>;

export const Welcome: React.FC<Props> = ({navigation}) => {
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
        <TouchableButton
          style={styles.TouchableButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.TouchableButtonText}>Continue</Text>
        </TouchableButton>
      </View>
    </ImageBackground>
  );
};

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
  TouchableButton: {
    marginTop: 12,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    width: '100%',
  },
  TouchableButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colourWhite,
  },
});
