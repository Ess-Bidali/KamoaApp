import {StyleSheet} from 'react-native';

export const GlobalColors = {
  pageBackground: '#fff9ee',
  headerColor: '#000000',
  lightgray: '#d3d3d3',
  primary: '#ECB64D',
  secondary: '#5EB784',
  transparent: '#ffffff00',
};

export const globalStyles = StyleSheet.create({
  container: {
    fontFamily: 'Barlow',
    color: GlobalColors.headerColor,
  },
});
