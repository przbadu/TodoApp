import React from 'react';
import {useTheme} from '@react-navigation/native';
import {TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

type Props = {
  name: string;
  size?: number;
  style?: TextStyle;
  onPress?: () => void;
};

export default ({name, size = 24, style, onPress}: Props) => {
  const {colors} = useTheme();

  const renderIcon = () => (
    <Icon name={name} size={size} style={{color: colors.text, ...style}} />
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
