import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchTabParams} from '../../types';
import {Search} from './Search';
import {SearchDetail} from './SearchDetail';

const Stack = createNativeStackNavigator<SearchTabParams>();

export function SearchStacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchPage" component={Search} />
      <Stack.Screen
        name="Book"
        component={SearchDetail}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}
