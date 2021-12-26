import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, StyleSheet, ViewStyle} from 'react-native';

type Props = {
  children: React.ReactNode;
  color?: string;
  containerStyles?: ViewStyle;
};

const Avatar = ({children, color, containerStyles}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: color || colors.background,
        ...containerStyles,
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    borderRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Avatar;
