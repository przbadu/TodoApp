import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {projectProps} from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import Avatar from '../../../components/Avatar';
import Heading from '../../../components/Heading';
import ListViewItemRow from '../../../components/ListViewItemRow';
import {RootStackParamsList} from '../../../navigation';

type Props = {
  data: projectProps[];
};

const ProjectsListView = ({data}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const handleItemPress = (item: projectProps) => {
    navigation.navigate('Tasks', {projectId: item.id});
  };

  function renderItem({item}: {item: projectProps}) {
    return (
      <ListViewItemRow onPress={() => handleItemPress(item)}>
        <View style={styles.row}>
          {/* <AppCheckBox isDone={false} color={item.color} /> */}
          <Heading style={{fontSize: 16, marginLeft: 10}}>{item.name}</Heading>
        </View>

        <Avatar color={item.color}>
          <AppText style={{fontSize: 12, fontWeight: 'bold'}}>
            {item.tasksCount.toString()}
          </AppText>
        </Avatar>
      </ListViewItemRow>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={1}
      keyExtractor={item => `list-view-${item.id}`}
    />
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

export default ProjectsListView;
