import React from 'react';
import {FlatList} from 'react-native';

import Project from '../../../../data/models/project';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../navigation';
import {useOrientation} from '../../../hooks/useOrientation';
import GridItem from './GridItem';

interface Props {
  data: Project[];
}

const ProjectsGridView = ({data}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();
  const orientation = useOrientation();

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <GridItem
          onPress={() => navigation.navigate('Tasks', {projectId: item.id})}
          item={item}
        />
      )}
      numColumns={orientation === 'PORTRAIT' ? 3 : 5}
      key={`${orientation}-grid-view`}
    />
  );
};

export default ProjectsGridView;
