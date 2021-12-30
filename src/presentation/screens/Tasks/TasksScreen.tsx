import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, SectionList} from 'react-native';
import {compose, withHandlers} from 'recompose';
import withObservables from '@nozbe/with-observables';

import Task from '../../../data/models/task';
import AppCheckBox from '../../components/AppCheckBox';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';
import Fab from '../../components/Fab';
import Heading from '../../components/Heading';
import IconButton from '../../components/IconButton';
import ListViewItemRow from '../../components/ListViewItemRow';
import {RootStackParamsList} from '../../navigation';
import {styles} from './styles';
import {projects} from '../../../data/controllers/ProjectsController';
import Project from '../../../data/models/project';

import TasksController, {
  tasks,
} from '../../../data/controllers/TasksController';

type Props = {
  project: Project;
  tasks: Task[];
};

const TasksScreen = ({project, tasks}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  const handleToggleTask = async (item: Task) => {
    await TasksController.toggle(item);
    navigation.navigate('Tasks', {projectId: project.id});
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

  function _renderItem({item}: {item: Task}) {
    return (
      <ListViewItemRow onPress={() => handleToggleTask(item)}>
        <View style={styles.row}>
          <AppCheckBox isDone={item.isDone} color={project.color} />
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
            sections={[{title: `Tasks ${tasks.length}`, data: tasks}]}
            keyExtractor={(item, index) => `section-list-${item.id}-${index}`}
            renderItem={_renderItem}
            renderSectionHeader={({section: {title}}) => (
              <Heading style={{marginVertical: 15}}>{title}</Heading>
            )}
          />
        </View>
      </View>
      <Fab
        onPress={() => navigation.navigate('AddTask', {projectId: project.id})}>
        <IconButton name="plus" />
      </Fab>
    </>
  );
};

const enhance = compose(
  withObservables(['route'], ({route}) => ({
    project: projects.findAndObserve(route.params.projectId),
  })),
  withObservables(['project'], ({project}) => ({
    tasks: project.tasks.observe(),
  })),
);

export default enhance(TasksScreen);
