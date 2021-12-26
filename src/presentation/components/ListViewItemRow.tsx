import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

type Props = {
  containerStyles?: ViewStyle;
  children: React.ReactNode;
};

const ListViewItemRow = ({containerStyles, children}: Props) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        ...styles.box,
        backgroundColor: colors.card,
        ...containerStyles,
      }}>
      {children}
    </View>
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
