import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {compose, withHandlers} from 'recompose';
import withObservables from '@nozbe/with-observables';

import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';
import AppTextInput from '../../components/AppTextInput';
import {RootStackParamsList} from '../../navigation';
import {styles} from './styles';
import {projects} from '../../../data/controllers/ProjectsController';
import Project from '../../../data/models/project';

type Props = {
  project: Project;
  addTask: (project: Project, name: string) => void;
};

const AddTaskScreen = ({project, addTask}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();
  const [form, setForm] = useState({name: ''});

  async function handleAddTask() {
    await addTask(project, form.name);
    navigation.navigate('Tasks', {projectId: project.id});
  }

  return (
    <View style={styles.container}>
      <AppHeader label="Add Tasks" icon="close" size={20} />

      <View style={styles.addTaskContentWrapper}>
        <AppTextInput
          label="What's in your mind?"
          value={form.name}
          onChangeText={text => setForm({...form, name: text})}
        />
        <AppButton
          label="Add Task"
          icon="plus"
          containerStyles={{marginTop: 20}}
          onPress={handleAddTask}
        />
      </View>
    </View>
  );
};

const enhance = compose(
  withObservables(['route'], ({route}) => ({
    project: projects.findAndObserve(route.params.projectId),
  })),
  withHandlers({
    addTask: () => async (project: Project, name: string) => {
      await project.addTask(name);
    },
  }),
);

export default enhance(AddTaskScreen);
