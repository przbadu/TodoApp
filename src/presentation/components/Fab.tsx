import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

type Props = {
  children: React.ReactNode;
  color?: string;
  onPress?: () => void;
};

const Fab = ({color, children, onPress}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: color || colors.card,
          borderColor: colors.border,
        }}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 42,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    elevation: 2,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default Fab;
