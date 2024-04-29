import React from 'react';
import {View, StyleSheet} from 'react-native';
import UploadSteps from '../upload-steps/upload-steps';
import StatementUploadForm from './upload-form';
import {GlobalColors} from '../../../styles';

function UploadSection({steps}: {steps: string[]}): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <UploadSteps steps={steps} />

      <StatementUploadForm />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: GlobalColors.white,
    borderWidth: 1.5,
    borderColor: GlobalColors.primary,
    borderRadius: 10,
    display: 'flex',
    gap: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default UploadSection;
