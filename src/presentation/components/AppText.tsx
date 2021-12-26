import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {
  style?: TextStyle;
  children: string;
};

const AppText = ({style, children}: Props) => {
  const {colors} = useTheme();

  return <Text style={{color: colors.text, ...style}}>{children}</Text>;
};

export default AppText;
