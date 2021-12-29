import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInputProps} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AppText from './AppText';

type Props = {label?: string} & TextInputProps;

const AppTextInput = ({label, onChange, ...rest}: Props) => {
  const {colors} = useTheme();

  return (
    <View>
      {label && (
        <AppText style={{marginTop: 20, marginBottom: 10}}>{label}</AppText>
      )}
      <TextInput
        style={{
          ...styles.input,
          backgroundColor: colors.card,
          borderColor: colors.border,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        onChange={onChange}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
  },
});

export default AppTextInput;
