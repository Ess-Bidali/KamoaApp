import React from 'react';
import {
  useColorScheme,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GlobalColors, GlobalFontSizes} from '../../styles';

function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: React.JSX.Element;
}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={styles.pageContainer}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>

        {/* Page Title */}
        <View>
          <Text style={styles.pageTitle}>{title}</Text>
        </View>

        {/* Page Content */}
        <View style={styles.pageContent}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: GlobalColors.pageBackground,
    minHeight: '100%',
    fontFamily: 'Barlow',
    padding: 20,
  },

  pageTitle: {
    color: GlobalColors.headerColor,
    fontSize: GlobalFontSizes.heading,
    fontWeight: '600',
    textAlign: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: {
    alignContent: 'center',
    width: 119,
    height: 40,
  },

  pageContent: {
    paddingVertical: 20,
    marginBottom: 30,
  },
});

export default PageWrapper;
