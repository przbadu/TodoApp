import React from 'react';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {compose} from 'recompose';
import withObservables from '@nozbe/with-observables';

import Project from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import GridViewItem from '../../../components/GridViewItem';
import Heading from '../../../components/Heading';
import {useOrientation} from '../../../hooks/useOrientation';

type Props = {
  item: Project;
  taskCount: number;
} & GenericTouchableProps;

const GridItem = ({item, taskCount, onPress}: Props) => {
  const orientation = useOrientation();

  return (
    <GridViewItem
      color={item.color}
      itemsPerRow={orientation === 'PORTRAIT' ? 3 : 5}
      onPress={onPress}>
      <Heading style={{fontSize: 18}}>{item.name}</Heading>
      <AppText style={{fontSize: 12}}>
        {taskCount.toString() + ' items'}
      </AppText>
    </GridViewItem>
  );
};

const enhance = compose(
  withObservables(['item'], ({item}: {item: Project}) => ({
    taskCount: item.tasks.observeCount(),
  })),
);

export default enhance(GridItem);
