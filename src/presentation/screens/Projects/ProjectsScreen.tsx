import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import withObservables from '@nozbe/with-observables';

import Project from '../../../data/models/project';
import Fab from '../../components/Fab';
import Heading from '../../components/Heading';
import IconButton from '../../components/IconButton';
import {RootStackParamsList} from '../../navigation';
import ProjectsGridView from './components/ProjectsGridView';
import ProjectsListView from './components/ProjectsListView';

import {styles} from './styles';
import {compose} from 'recompose';
import {projects} from '../../../data/controllers/ProjectsController';

type Props = {
  projects: Project[];
};

const ProjectsScreen = ({projects}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();
  const [gridView, setGridView] = useState<boolean>(false);

  console.log(projects);

  return (
    <>
      <View style={styles.container}>
        <Heading style={{marginBottom: 10}}>Todo App</Heading>

        <View style={styles.projectHeading}>
          <Heading style={styles.subheading}>{`Projects (${
            (projects || []).length
          })`}</Heading>
          <IconButton
            name={gridView ? 'view-list' : 'view-grid'}
            onPress={() => setGridView(!gridView)}
          />
        </View>

        {gridView ? (
          <ProjectsGridView data={projects} />
        ) : (
          <ProjectsListView data={projects} />
        )}
      </View>
      <Fab onPress={() => navigation.navigate('AddProject')}>
        <IconButton name="plus" />
      </Fab>
    </>
  );
};

const enhance = compose(
  withObservables([], () => ({
    projects: projects.query().observe(),
  })),
);

export default enhance(ProjectsScreen);
