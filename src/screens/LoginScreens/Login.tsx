import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from '../../components/Text';
import {theme} from '../../utils/themes';
import {RootStackScreenProps} from '../../types';
import {TouchableButton} from '../../components/Button';

type Props = RootStackScreenProps<'Login'>;

export const Login: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bookgram</Text>
      <View>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableButton
          style={styles.button}
          onPress={() => navigation.navigate('Tabs')}>
          <Text>Log in</Text>
        </TouchableButton>
        <Text style={styles.signUpText}>
          Don't have an account?{' '}
          <Text fontWeight="700" style={styles.highlighted}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Special Elite',
    fontSize: 36,
    color: theme.colourPrimaryGreen,
    textAlign: 'center',
    marginBottom: 26,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colourShadeGreen,
    padding: 12,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 12,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  signUpText: {
    textAlign: 'center',
  },
  highlighted: {
    color: theme.colourPrimaryGreen,
  },
});
