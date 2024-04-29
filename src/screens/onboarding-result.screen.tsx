import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PageWrapper from '../components/page-wrapper';
import ClassicButton from '../components/buttons/classic-button';
import {GlobalColors, GlobalFontSizes} from '../../styles';
import {OnboardingResult} from '../models/onboarding-result.enum';

const resultStrings: {[state: string]: OnboardingResultInfo} = {
  [OnboardingResult.Success]: {
    sectionTitle: 'Registration Complete!',
    sectionSubtitle: `What's next?`,
    sectionDescription:
      'We are currently analysing your statement to generate useful insights that will help you to secure a loan. You will be notified once your insights are ready.',
    sectionExtra:
      'In the mean time, feel free to browse through the range of features that you have now unlocked!',
    vectorImgUrl: 'https://reactnative.dev/img/tiny_logo.png',
    btnTitle: 'Start Browsing',
  },
  [OnboardingResult.Fail]: {
    sectionTitle: 'Registration Failed!',
    sectionSubtitle: 'Required Permissions',
    sectionDescription:
      'The requested permissions are essential for the running of Kamoa App. Please grant the necessary permissions in order to proceed',
    vectorImgUrl: 'https://reactnative.dev/img/tiny_logo.png',
    btnTitle: 'Go Back to Step 1',
  },
};

function OnboardingResultScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}): React.JSX.Element {
  const {result} = route.params;
  const resultToDisplay =
    resultStrings[result] ?? resultStrings[OnboardingResult.Fail];
  const {
    sectionTitle = 'An Error Occurred',
    vectorImgUrl,
    sectionSubtitle,
    sectionDescription,
    sectionExtra,
    btnTitle = 'Go Back to Step 1',
  } = resultToDisplay;

  return (
    <PageWrapper title={sectionTitle ?? ''}>
      <View>
        {/* Image */}
        {vectorImgUrl && (
          <View style={styles.vectorImgContainer}>
            <Image
              style={styles.vectorImg}
              source={{
                uri: vectorImgUrl,
              }}
            />
          </View>
        )}

        <View style={styles.detailsContainer}>
          {/* Section Subtitle */}
          <View>
            <Text style={styles.sectionSubtitle}>{sectionSubtitle}</Text>
          </View>

          {/* Section Description */}
          <View>
            <Text style={styles.sectionDescription}>{sectionDescription}</Text>
          </View>

          {/* Section Cta */}
          {sectionExtra && (
            <View style={styles.sectionExtra}>
              <Text style={styles.sectionExtraText}>{sectionExtra}</Text>
            </View>
          )}

          {/* Next Step Btn */}
          <ClassicButton
            title={btnTitle}
            alternateColor={true}
            onPress={() => navigation.navigate('PrimerScreen')}
          />
        </View>
      </View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  vectorImgContainer: {
    alignItems: 'center',
    height: 300,
  },

  vectorImg: {
    height: 250,
    width: 200,
    margin: 'auto',
  },

  detailsContainer: {
    display: 'flex',
    gap: 20,
  },

  sectionSubtitle: {
    fontSize: GlobalFontSizes.large,
    color: GlobalColors.grey,
    textAlign: 'center',
    // marginVertical: 10,
  },

  sectionDescription: {
    textAlign: 'center',
    fontSize: GlobalFontSizes.smallMedium,
  },

  sectionExtra: {
    // marginVertical: 20,
  },

  sectionExtraText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: GlobalFontSizes.smallMedium,
  },
});

export interface OnboardingResultInfo {
  sectionTitle: string;
  vectorImgUrl: string;
  sectionSubtitle: string;
  sectionDescription: string;
  btnTitle: string;
  sectionExtra?: string;
}

export default OnboardingResultScreen;
