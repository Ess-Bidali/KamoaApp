import React from 'react';
import {StyleSheet, View} from 'react-native';
import PageWrapper from '../components/page-wrapper';
import ClassicButton from '../components/buttons/classic-button';
import TextButton from '../components/buttons/text-button';
import AppProgressBar from '../components/progress-bar/progress-bar';
import UploadSection from '../components/statement-upload/upload-section';

function UploadScreen({navigation}: {navigation: any}): React.JSX.Element {
  const title = 'How to upload your M-Pesa Statement';

  const progressTitle = 'Step 2/3';
  const progressFraction = 2 / 3;

  const stepsToUpload = [
    'Dial *334#',
    'Select 7 - My Account',
    'Select 3 - M-PESA Statement',
    'Select 1 - M-PESA Statement',
    'Select 1 - Request Statement',
    'Select 1 - Full Statement',
    'Select 4 - 6 Months Statement',
    'Select 1 - Enter e-mail address',
    'Enter your M-PESA Pin to receive your statement',
  ];

  return (
    <PageWrapper title={title}>
      <View>
        {/* Steps to Upload */}
        <UploadSection steps={stepsToUpload} />

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <AppProgressBar title={progressTitle} progress={progressFraction} />
        </View>

        {/* Next Step Btn */}
        <ClassicButton
          title="Upload M-Pesa Statement"
          onPress={() => navigation.navigate('PermissionsScreen')}
        />

        {/* Text Btn */}
        <View style={styles.textBtnContainer}>
          <TextButton
            title="Back to Login"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  progressSection: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 5,
  },

  textBtnContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
});

export default UploadScreen;
