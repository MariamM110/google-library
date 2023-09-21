import React from 'react';
import {Text, View} from 'react-native';
import {SearchTabScreenProps} from '../types';

type Props = SearchTabScreenProps<'Search'>;

export const Search: React.FC<Props> = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
