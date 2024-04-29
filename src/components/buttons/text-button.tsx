import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GlobalColors} from '../../../styles';

function TextButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => any;
}): React.JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
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
    fontSize: 12,
    fontWeight: '500',
    color: GlobalColors.headerColor,
  },
});

export default TextButton;
