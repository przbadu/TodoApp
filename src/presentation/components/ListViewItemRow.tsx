import {useTheme} from '@react-navigation/native';
import React from 'react';
import {ViewStyle, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

type Props = {
  containerStyles?: ViewStyle;
  children: React.ReactNode;
} & GenericTouchableProps;

const ListViewItemRow = ({containerStyles, children, onPress}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.box,
        backgroundColor: colors.card,
        ...containerStyles,
      }}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
    borderRadius: 10,
  },
});

export default ListViewItemRow;
