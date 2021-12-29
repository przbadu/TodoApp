import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {projectProps} from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import Avatar from '../../../components/Avatar';
import Heading from '../../../components/Heading';
import ListViewItemRow from '../../../components/ListViewItemRow';

type Props = {
  item: projectProps;
} & GenericTouchableProps;

const ListItem = ({item, onPress}: Props) => {
  return (
    <ListViewItemRow onPress={onPress}>
      <View style={styles.row}>
        {/* <AppCheckBox isDone={false} color={item.color} /> */}
        <Heading style={{fontSize: 16, marginLeft: 10}}>{item.name}</Heading>
      </View>

      <Avatar color={item.color}>
        <AppText style={{fontSize: 12, fontWeight: 'bold'}}>
          {item.tasksCount!.toString()}
        </AppText>
      </Avatar>
    </ListViewItemRow>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    marginRight: 10,
  },
});

export default ListItem;
