import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Feed} from './Feed';
import {Book} from './BookDetail';
import {theme} from '../utils/themes';

const Stack = createNativeStackNavigator();

export function FeedStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedPage"
        component={Feed}
        options={{
          title: 'Bookgram',
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: theme.colourPrimaryGreen,
          },
          headerTitleStyle: {
            fontFamily: 'Special Elite',
            fontSize: 25,
            color: theme.colourWhite,
          },
        }}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={({route}) => ({
          title: route.params ? route.params.book.title : 'Bookgram',
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: theme.colourPrimaryGreen,
          },
          headerTitleStyle: {
            fontFamily: 'Special Elite',
            fontSize: 25,
            color: theme.colourWhite,
          },
        })}
      />
    </Stack.Navigator>
  );
}
