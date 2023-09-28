import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountTabsParams} from '../../types';
import {Account} from './Account';
import {Follows} from './Follows';
import {SearchDetail} from '../SearchScreens/SearchDetail';
import {Users} from './Users';

const Stack = createNativeStackNavigator<AccountTabsParams>();

export function AccountStacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AccountPage" component={Account} />
      <Stack.Screen
        name="Follows"
        component={Follows}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="Book"
        component={SearchDetail}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}
