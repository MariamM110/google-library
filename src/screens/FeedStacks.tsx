import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {Text} from '../components/Text';
import {Feed} from './Feed';
import {Provider} from '../context';
import {Book} from './BookDetail';

type RootStackParamList = {
  Feed: undefined;
  Book: {book: object};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function FeedStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={{headerShown: false}}
        initialParams={{book: Book}}
      />
    </Stack.Navigator>
  );
}
