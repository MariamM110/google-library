import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedStacks} from './FeedStacks';
import {Search} from './Search';
import {Bookmark} from './Bookmark';
import {Account} from './Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../utils/themes';
import {BottomTabParams} from '../types';

const Tab = createBottomTabNavigator<BottomTabParams>();

export function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: theme.colourPrimaryGreen,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedStacks}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'sofa-single' : 'sofa-single-outline'}
              color={theme.colourWhite}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name="magnify"
              color={theme.colourWhite}
              size={focused ? size + 4 : size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'bookmark' : 'bookmark-outline'}
              color={theme.colourWhite}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, size}) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              color={theme.colourWhite}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
