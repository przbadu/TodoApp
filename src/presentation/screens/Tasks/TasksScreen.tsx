import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import {TaskProps} from '../../../data/models/task';
import AppCheckBox from '../../components/AppCheckBox';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import Fab from '../../components/Fab';
import Heading from '../../components/Heading';
import IconButton from '../../components/IconButton';
import ListViewItemRow from '../../components/ListViewItemRow';
import {RootStackParamsList} from '../../navigation';

const _tasks: TaskProps[] = [
  {
    id: 1,
    color: '#9A5128',
    description: 'Build react native offline first app',
    isDone: false,
  },
  {
    id: 2,
    color: '#9A5128',
    description: 'Create Rails 7 api for cloud storage',
    isDone: false,
  },
  {
    id: 3,
    color: '#9A5128',
    description: 'Build react app for web',
    isDone: true,
  },
  {
    id: 4,
    color: '#9A5128',
    description: 'Build electron app for desktop',
    isDone: true,
  },
  {
    id: 5,
    color: '#9A5128',
    description: 'Offline first with watermelondb',
    isDone: false,
  },
  {
    id: 6,
    color: '#9A5128',
    description: 'Sync data between devices',
    isDone: false,
  },
];

const TasksScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();
  const [tasks, setTasks] = useState(_tasks);

  const handlePress = (item: TaskProps) => {
    const index = tasks.findIndex(t => t.id === item.id);
    const _tasks = [...tasks];
    _tasks[index] = {..._tasks[index], isDone: !_tasks[index].isDone};
    setTasks(_tasks);
  };

  const filterTodoList = () => tasks.filter(task => task.isDone == false);
  const filterDoneList = () => tasks.filter(task => task.isDone == true);

  const filteredTasks = useMemo(() => {
    const _todos = filterTodoList();
    const _done = filterDoneList();
    let _result = [];
    if (_todos.length)
      _result.push({title: `Tasks - ${_todos.length}`, data: _todos});
    if (_done.length)
      _result.push({title: `Done - ${_done.length}`, data: _done});

    return _result;
  }, [tasks]);

  function _renderItem({item}: {item: TaskProps}) {
    return (
      <ListViewItemRow onPress={() => handlePress(item)}>
        <View style={styles.row}>
          <AppCheckBox isDone={item.isDone} color={item.color} />
          <AppText>{item.description}</AppText>
        </View>
      </ListViewItemRow>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <AppHeader label="School" />

        <View style={styles.contentWrapper}>
          <SectionList
            sections={filteredTasks}
            keyExtractor={(item, index) => `section-list-${item.id}-${index}`}
            renderItem={_renderItem}
            renderSectionHeader={({section: {title}}) => (
              <Heading style={{marginVertical: 15}}>{title}</Heading>
            )}
          />
        </View>
      </View>
      <Fab onPress={() => navigation.navigate('AddTask', {projectId: '1'})}>
        <IconButton name="plus" />
      </Fab>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentWrapper: {
    marginTop: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TasksScreen;
