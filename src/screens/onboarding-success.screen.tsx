import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PageWrapper from '../components/page-wrapper';
import ClassicButton from '../components/buttons/classic-button';
import {GlobalColors, GlobalFontSizes} from '../../styles';

function OnboardingSuccessScreen({
  navigation,
}: {
  navigation: any;
}): React.JSX.Element {
  const sectionTitle = 'Registration Complete!';
  const sectionSubtitle = `What's next?`;
  const sectionDescription =
    'We are currently analysing your statement in order to provide useful insights that will help you to secure a loan. You will be notified once your insights are ready.';

  const sectionCta =
    'In the mean time, feel free to browse and discover what you can do on our app!';

  return (
    <PageWrapper title={sectionTitle}>
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

        <View>
          {/* Section Subtitle */}
          <View>
            <Text style={styles.sectionSubtitle}>{sectionSubtitle}</Text>
          </View>

          {/* Section Description */}
          <View>
            <Text style={styles.sectionDescription}>{sectionDescription}</Text>
          </View>

          {/* Section Cta */}
          <View style={styles.sectionCta}>
            <Text style={styles.sectionCtaText}>{sectionCta}</Text>
          </View>
        </View>

        {/* Next Step Btn */}
        <ClassicButton
          title="Start Browsing"
          alternateColor={true}
          onPress={() => navigation.navigate('UploadScreen')}
        />
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

  sectionSubtitle: {
    fontSize: GlobalFontSizes.large,
    color: GlobalColors.grey,
    textAlign: 'center',
    marginVertical: 10,
  },

  sectionDescription: {
    textAlign: 'center',
    fontSize: GlobalFontSizes.medium,
  },

  sectionCta: {
    marginVertical: 20,
  },

  sectionCtaText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: GlobalFontSizes.medium,
  },
});

export default OnboardingSuccessScreen;
