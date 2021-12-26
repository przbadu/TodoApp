import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, View, ViewStyle, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {
  color?: string;
  containerStyles?: ViewStyle;
  children: React.ReactNode;
};

const GridViewItem = ({color, containerStyles, children}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        ...styles.box,
        backgroundColor: color || colors.card,
        ...containerStyles,
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 10) / 3 - 10,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default GridViewItem;
