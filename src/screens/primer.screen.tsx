import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PageWrapper from '../components/page-wrapper';
import {DetailInfo} from '../models/detail-info.interface';
import InfoItemsList from '../components/info-section/info-items-list';
import ClassicButton from '../components/buttons/classic-button';
import TextButton from '../components/buttons/text-button';
import AppProgressBar from '../components/progress-bar/progress-bar';

function PrimerScreen({navigation}: {navigation: any}): React.JSX.Element {
  const title = 'Upload a 6 month M-Pesa Statement';

  const details: DetailInfo[] = [
    {
      title: 'Unlock the power of Kamoa with your M-Pesa',
      description:
        'Get access to the marketplace and help lenders see the real you by uploading a six month m-pesa statement',
    },
    {
      title: 'Get insights on your spending habits',
      description:
        'Kamoa helps you understand your spending  and track your finances every time you upload a statement',
    },
    {
      title: 'Secure a higher loan limit',
      description:
        'Users that share more information get access to higher loan limits with flexible payments and low interest rates',
    },
  ];

  const progressTitle = 'Step 1/3';
  const progressFraction = 1 / 3;

  return (
    <PageWrapper title={title}>
      <View>
        {/* Image */}
        <View style={styles.vectorImgContainer}>
          <Image
            style={styles.vectorImg}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>

        {/* Info Items List */}
        <InfoItemsList details={details} />

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <AppProgressBar title={progressTitle} progress={progressFraction} />
        </View>

        {/* Next Step Btn */}
        <ClassicButton
          title="Next"
          onPress={() => navigation.navigate('UploadScreen')}
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
  vectorImgContainer: {
    alignItems: 'center',
  },

  vectorImg: {
    height: 150,
    width: 200,
  },

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

export default PrimerScreen;
