import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BookmarkTabScreenProps} from '../../types';

type Props = BookmarkTabScreenProps<'Bookmark'>;

export const Bookmark: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>Bookmark</Text>
    </SafeAreaView>
  );
};
