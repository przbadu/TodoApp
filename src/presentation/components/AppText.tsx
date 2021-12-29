import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {
  color?: string;
  style?: TextStyle;
  children: string;
};

const AppText = ({style, color, children}: Props) => {
  const {colors} = useTheme();

  return (
    <Text style={{color: color || colors.text, ...style}}>{children}</Text>
  );
};

export default AppText;
