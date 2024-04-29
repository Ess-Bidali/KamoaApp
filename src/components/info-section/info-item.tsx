import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalColors} from '../../../styles';

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
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },

  infoDescription: {
    fontSize: 12,
  },
});

export default InfoItem;
