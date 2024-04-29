import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoItem from './info-item';
import {DetailInfo} from '../../models/detail-info.interface';
import {GlobalColors} from '../../../styles';

function InfoItemsList({details}: {details: DetailInfo[]}): React.JSX.Element {
  return (
    <View style={styles.itemsContainer}>
      {details.map((detail, index) => (
        <View key={index}>
          {/* Item */}
          <InfoItem title={detail?.title} description={detail?.description} />

          {/* Divider */}
          {index < details?.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    display: 'flex',
    marginBottom: 10,
    padding: 20,
  },

  divider: {
    borderBottomColor: GlobalColors.lightgray,
    borderBottomWidth: 1,
    minWidth: '100%',
    marginVertical: 10,
  },
});

export default InfoItemsList;
