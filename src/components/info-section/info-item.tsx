import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalColors, GlobalFontSizes} from '../../../styles';

function InfoItem({
  title,
  description,
}: {
  title: string;
  description: string;
}): React.JSX.Element {
  return (
    <View>
      {/* Title */}
      <View>
        <Text style={styles.infoTitle}>{title}</Text>
      </View>

      {/* Details */}
      <View>
        <Text style={styles.infoDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoTitle: {
    color: GlobalColors.headerColor,
    fontSize: GlobalFontSizes.subheading,
    fontWeight: '700',
    marginBottom: 5,
  },

  infoDescription: {
    fontSize: GlobalFontSizes.small,
  },
});

export default InfoItem;
