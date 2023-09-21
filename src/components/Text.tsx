import React from 'react';
import {Text as RNText, StyleSheet, TextInputProps} from 'react-native';

type Props = TextInputProps & {
  fontWeight?: '500' | '700';
};

export const Text: React.FC<Props> = ({
  style,
  children,
  fontWeight = '500',
  ...props
}) => {
  return (
    <RNText style={[styles.text, {fontWeight: fontWeight}, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Sono',
  },
});
