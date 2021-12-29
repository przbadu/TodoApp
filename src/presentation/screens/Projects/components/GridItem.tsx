import React from 'react';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {projectProps} from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import GridViewItem from '../../../components/GridViewItem';
import Heading from '../../../components/Heading';
import {useOrientation} from '../../../hooks/useOrientation';

type Props = {
  item: projectProps;
} & GenericTouchableProps;

const GridItem = ({item, onPress}: Props) => {
  const orientation = useOrientation();

  return (
    <GridViewItem
      color={item.color}
      itemsPerRow={orientation === 'PORTRAIT' ? 3 : 5}
      onPress={onPress}>
      <Heading style={{fontSize: 18}}>{item.name}</Heading>
      <AppText style={{fontSize: 12}}>
        {item.tasksCount!.toString() + ' items'}
      </AppText>
    </GridViewItem>
  );
};

export default GridItem;
