import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, View, ViewStyle, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;

type Props = {
  color?: string;
  containerStyles?: ViewStyle;
  children: React.ReactNode;
  onPress?: () => void;
};

const GridViewItem = ({color, containerStyles, children, onPress}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.box,
        backgroundColor: color || colors.card,
        ...containerStyles,
      }}>
      {children}
    </TouchableOpacity>
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
