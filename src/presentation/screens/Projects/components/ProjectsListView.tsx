import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {projectProps} from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import Avatar from '../../../components/Avatar';
import Heading from '../../../components/Heading';
import ListViewItemRow from '../../../components/ListViewItemRow';
import {RootStackParamsList} from '../../../navigation';
import ListItem from './ListItem';

type Props = {
  data: projectProps[];
};

const ProjectsListView = ({data}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const handleItemPress = (item: projectProps) => {
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
