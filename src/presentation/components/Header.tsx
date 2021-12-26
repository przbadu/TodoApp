import React from 'react';
import {TextStyle} from 'react-native';
import AppText from './AppText';

type Props = {
  children: string;
  style?: TextStyle;
};
export default ({children, style}: Props) => (
  <AppText style={{fontWeight: 'bold', fontSize: 16, ...style}}>
    {children}
  </AppText>
);
