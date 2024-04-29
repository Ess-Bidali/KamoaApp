import {StyleSheet} from 'react-native';

export const GlobalColors = {
  pageBackground: '#fff9ee',
  headerColor: '#000000',

  lightgray: '#d3d3d3',
  white: '#ffffff',
  grey: '#808080',

  greyBg: '#FBFBFB',
  borderColor: '#FBFBFB',

  primary: '#ECB64D',
  secondary: '#5EB784',
  transparent: '#ffffff00',
};

export const GlobalFontSizes = {
  small: 12,
  medium: 16,
  large: 28,
  heading: 28,
  subheading: 16,
};

export const globalStyles = StyleSheet.create({
  container: {
    fontFamily: 'Barlow',
    color: GlobalColors.headerColor,
  },
});
