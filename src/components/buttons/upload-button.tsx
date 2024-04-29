import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GlobalColors, GlobalFontSizes} from '../../../styles';

function UploadButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => any;
}): React.JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={styles.uploadButtonContainer}>
      <Text style={styles.uploadButtonTextWhite}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  uploadButtonContainer: {
    elevation: 1,
    backgroundColor: GlobalColors.primary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  uploadButtonTextWhite: {
    fontSize: GlobalFontSizes.medium,
    alignSelf: 'center',
    paddingHorizontal: 10,
    color: GlobalColors.white,
  },
});

export default UploadButton;
