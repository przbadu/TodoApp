import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from './AppText';

type Props = {
  icon?: string;
  label: string;
  color?: string;
  iconColor?: string;
  textColor?: string;
  containerStyles?: ViewStyle;
} & GenericTouchableProps;

const AppButton = ({
  onPress,
  label,
  icon,
  color,
  iconColor,
  textColor,
  containerStyles,
}: Props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: color || colors.primary,
          ...containerStyles,
        }}>
        {icon && (
          <Icon
            name={icon}
            size={24}
            color={iconColor || colors.text}
            style={{marginRight: 10}}
          />
        )}
        {label && (
          <AppText color={textColor} style={{fontSize: 16, fontWeight: 'bold'}}>
            {label}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 1,
  },
});

export default AppButton;
