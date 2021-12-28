import React from 'react';
import {FlatList} from 'react-native';

import {projectProps} from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import Header from '../../../components/Header';
import GridViewItem from '../../../components/GridViewItem';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../navigation';

interface Props {
  data: projectProps[];
}

const GridView = ({data}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  function renderItem({item}: {item: projectProps}) {
    return (
      <GridViewItem
        color={item.color}
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
      numColumns={3}
      keyExtractor={item => `grid-view-${item.id}`}
    />
  );
};

export default GridView;
