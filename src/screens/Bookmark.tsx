import React from 'react';
import {Text, View} from 'react-native';
import {BookmarkTabScreenProps} from '../types';

type Props = BookmarkTabScreenProps<'Bookmark'>;

export const Bookmark: React.FC<Props> = () => {
  return (
    <View>
      <Text>Bookmark</Text>
    </View>
  );
};
