import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PageWrapper from '../components/page-wrapper';
import {DetailInfo} from '../models/detail-info.interface';
import InfoItemsList from '../components/info-section/info-items-list';
import ClassicButton from '../components/buttons/classic-button';
import TextButton from '../components/buttons/text-button';
import AppProgressBar from '../components/progress-bar/progress-bar';

function PermissionsScreen({navigation}: {navigation: any}): React.JSX.Element {
  const title = 'Accept Permissions';

  const details: DetailInfo[] = [
    {
      title: 'Personal info',
      description:
        'We collect personal info to prevent fraud and also protect you from it. ie Phone number, email, name',
    },
    {
      title: 'Approximate location',
      description:
        'We look at the approximate location to help us show you relevant infomation.',
    },
    {
      title: 'App info and performance',
      description:
        'Our app runs in many devices and this help us optimise for every type of device.',
    },
  ];

  const progressTitle = 'Step 3/3';
  const progressFraction = 3 / 3;

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

        <View style={styles.moreDetailsSection}>
          <TextButton
            title="Get more info from Google Play"
            onPress={() => navigation.navigate('UploadScreen')}
          />
        </View>

        {/* Progress Bar */}
        <View style={styles.progressSection}>
          <AppProgressBar title={progressTitle} progress={progressFraction} />
        </View>

        {/* Next Step Btn */}
        <ClassicButton
          title="Accept & Continue"
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

  moreDetailsSection: {
    paddingLeft: 20,
    marginTop: -15,
    marginBottom: 20,
    alignItems: 'flex-start',
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

export default PermissionsScreen;
