import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GlobalColors} from '../../../styles';

function ClassicButton({
  title,
  disabled,
  onPress,
  alternateColor,
}: {
  title: string;
  disabled?: boolean;
  alternateColor?: boolean;
  onPress: () => any;
}): React.JSX.Element {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.classicButtonContainer}>
      <Text
        style={
          alternateColor
            ? styles.classicButtonTextWhite
            : styles.classicButtonText
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  classicButtonContainer: {
    elevation: 1,
    backgroundColor: GlobalColors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  classicButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: GlobalColors.headerColor,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  classicButtonTextWhite: {
    fontSize: 15,
    fontWeight: '700',
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: GlobalColors.white,
  },
});

export default ClassicButton;
