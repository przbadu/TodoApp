import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import Project from '../../../../data/models/project';

import {RootStackParamsList} from '../../../navigation';
import ListItem from './ListItem';

type Props = {
  data: Project[];
};

const ProjectsListView = ({data}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const handleItemPress = (item: Project) => {
    navigation.navigate('Tasks', {projectId: item.id!});
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ListItem onPress={() => handleItemPress(item)} item={item} />
      )}
      numColumns={1}
      keyExtractor={item => `list-view-${item.id}`}
    />
  );
};

export default ProjectsListView;
