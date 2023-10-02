import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BookmarkTabParams} from '../../types';
import {Bookmark} from './Bookmark';
import {theme} from '../../utils/themes';

const Stack = createNativeStackNavigator<BookmarkTabParams>();

export function BookmarkStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookmarkPage"
        component={Bookmark}
        // options={{
        //   title: 'Bookmark',
        //   headerBackVisible: false,
        //   headerStyle: {
        //     backgroundColor: theme.colourPrimaryGreen,
        //   },
        //   headerTitleStyle: {
        //     fontFamily: 'Special Elite',
        //     fontSize: 25,
        //     color: theme.colourWhite,
        //   },
        // }}
      />
    </Stack.Navigator>
  );
}
