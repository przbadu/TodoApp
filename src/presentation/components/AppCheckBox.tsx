import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from './IconButton';

type Props = {
  isDone: boolean;
  color?: string;
};

const AppCheckBox = ({isDone, color}: Props) => {
  const {colors} = useTheme();

  const _color = useMemo(() => color || colors.card, []);

  return (
    <View style={{...styles.container, borderColor: _color}}>
      {isDone && (
        <IconButton name="check" style={{...styles.check, color: _color}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    marginRight: 10,
  },
  check: {
    position: 'relative',
    top: -5,
  },
});

export default AppCheckBox;
