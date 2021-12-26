import {DefaultTheme, DarkTheme} from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

enum DarkThemeColors {
  primaryBackground = '#17191E',
  secondaryBackground = '#2B2B38',
  primaryText = '#DCDCDC',
  secondaryText = '#AEAEAE',
  primaryButton = '#5B5858',
}

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: DarkThemeColors.primaryBackground,
    card: DarkThemeColors.primaryBackground,
    text: DarkThemeColors.primaryText,
  },
};
