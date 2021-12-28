import React from 'react';
import {View} from 'react-native';
import BackButton from './BackButton';
import Heading from './Heading';

type Props = {
  label: string;
  icon?: string;
  size?: number;
};
const AppHeader = ({label, icon, size}: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <BackButton icon={icon} size={size} />
      <Heading style={{marginLeft: 20}}>{label}</Heading>
    </View>
  );
};

export default AppHeader;
