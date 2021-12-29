import React from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

type Props = {
  name: string;
  size?: number;
  color?: string;
} & GenericTouchableProps;

export default ({name, size = 24, color, onPress}: Props) => {
  const {colors} = useTheme();

  const renderIcon = () => (
    <Icon name={name} size={size} color={color || colors.text} />
  );

  if (!onPress) {
    return renderIcon();
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {renderIcon()}
    </TouchableWithoutFeedback>
  );
};
