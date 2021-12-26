import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {projectProps} from '../../../../data/models/project';
import AppText from '../../../components/AppText';
import Avatar from '../../../components/Avatar';
import Header from '../../../components/Header';
import ListViewItemRow from '../../../components/ListViewItemRow';

interface Props {
  data: projectProps[];
}

const ListView = ({data}: Props) => {
  const {colors} = useTheme();

  function renderItem({item}: {item: projectProps}) {
    return (
      <ListViewItemRow>
        <View style={styles.row}>
          <View
            style={{
              ...styles.square,
              borderColor: item.color || colors.background,
            }}
          />
          <Header style={{fontSize: 16}}>{item.name}</Header>
        </View>

        <Avatar color={item.color}>
          <AppText style={{fontSize: 12}}>{item.tasksCount.toString()}</AppText>
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

export default ListView;
