import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedStacks} from './FeedStacks';
import {Search} from './Search';
import {Bookmark} from './Bookmark';
import {Account} from './Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export function DetailScreen() {
  //make sure to pass the prop in the function to be able to use it
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={FeedStacks}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="sofa-single-outline"
              color={color}
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
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={color}
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
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
