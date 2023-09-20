import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {theme} from '../utils/themes';

type Props = TouchableOpacityProps & {};

export const TouchableButton: React.FC<Props> = ({
  style,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.TouchableButtonStyle, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TouchableButtonStyle: {
    padding: 10,
    backgroundColor: theme.colourDarkerGreen,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
