import * as React from 'react';
import {Text} from '../components/Text';
import {View} from 'react-native';
import {AccountTabScreenProps} from '../types';

type Props = AccountTabScreenProps<'Account'>;

export const Account: React.FC<Props> = () => {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};
