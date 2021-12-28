import React from 'react';
import {FlatList} from 'react-native';

import {projectProps} from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import Header from '../../../components/Header';
import GridViewItem from '../../../components/GridViewItem';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../navigation';
import {useOrientation} from '../../../hooks/useOrientation';

interface Props {
  data: projectProps[];
}

const ProjectsGridView = ({data}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();
  const orientation = useOrientation();

  function renderItem({item}: {item: projectProps}) {
    return (
      <GridViewItem
        color={item.color}
        itemsPerRow={orientation === 'PORTRAIT' ? 3 : 5}
        onPress={() => navigation.navigate('Tasks', {projectId: item.id})}>
        <Header style={{fontSize: 18}}>{item.name}</Header>
        <AppText style={{fontSize: 12}}>
          {item.tasksCount.toString() + ' items'}
        </AppText>
      </GridViewItem>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={orientation === 'PORTRAIT' ? 3 : 5}
      key={`${orientation}-grid-view`}
    />
  );
};

export default ProjectsGridView;
