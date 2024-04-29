import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GlobalColors, GlobalFontSizes} from '../../../styles';

function TextButton({
  title,
  disabled,
  onPress,
}: {
  title: string;
  disabled?: boolean;
  onPress: () => any;
}): React.JSX.Element {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderBottomWidth: 1,
    color: GlobalColors.headerColor,
  },

  buttonText: {
    marginBottom: -1,
    fontSize: GlobalFontSizes.small,
    fontWeight: '500',
    color: GlobalColors.headerColor,
  },
});

export default TextButton;
