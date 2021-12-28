import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from './IconButton';

const BackButton = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    <View style={{...styles.buttonWrapper, backgroundColor: colors.card}}>
      <IconButton
        name="keyboard-backspace"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default BackButton;
