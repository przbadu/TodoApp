import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ViewStyle, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useScreenWidth} from '../hooks/useScreenWidth';

type Props = {
  color?: string;
  itemsPerRow?: number;
  containerStyles?: ViewStyle;
  children: React.ReactNode;
  onPress?: () => void;
};

const GridViewItem = ({
  color,
  containerStyles,
  children,
  itemsPerRow = 3,
  onPress,
}: Props) => {
  const width = useScreenWidth();
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.box,
        width: (width - 10) / itemsPerRow - 10,
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
    height: 100,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default GridViewItem;
