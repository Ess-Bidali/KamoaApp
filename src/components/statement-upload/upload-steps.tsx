import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GlobalFontSizes} from '../../../styles';

function UploadStep({step}: {step: string}): React.JSX.Element {
  return (
    <View style={styles.uploadStep}>
      <Text>{'\u2022'}</Text>
      <Text style={styles.uploadStepText}>{step}</Text>
    </View>
  );
}

function UploadSteps({steps}: {steps: string[]}): React.JSX.Element {
  return (
    <View>
      {steps.map(step => (
        <UploadStep key={step} step={step} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  uploadStep: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 3,
    paddingLeft: 8,
  },

  uploadStepText: {
    fontSize: GlobalFontSizes.subheading,
  },
});

export default UploadSteps;
