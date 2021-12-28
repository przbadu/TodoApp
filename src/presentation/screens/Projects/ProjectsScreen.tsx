import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {projectProps} from '../../../data/models/project';
import Fab from '../../components/Fab';

import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import ProjectsGridView from './components/ProjectsGridView';
import ProjectsListView from './components/ProjectsListView';

const tempProjects: projectProps[] = [
  {id: '1', name: 'School', color: '#9A5128', tasksCount: 10},
  {id: '2', name: 'Work', color: '#EF5DA8', tasksCount: 10},
  {id: '3', name: 'Personal', color: '#5D5FEF', tasksCount: 10},
  {id: '4', name: 'Travel', color: undefined, tasksCount: 10},
];

const ProjectsScreen = () => {
  const [projects] = useState<projectProps[]>(tempProjects);
  const [gridView, setGridView] = useState<boolean>(false);

  return (
    <>
      <View style={styles.container}>
        <Header style={{marginBottom: 10}}>Todo App</Header>

        <View style={styles.projectHeading}>
          <Header
            style={
              styles.subheading
            }>{`Projects (${tempProjects.length})`}</Header>
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
      <Fab>
        <IconButton name="plus" />
      </Fab>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  subheading: {
    fontWeight: 'normal',
  },
  projectHeading: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProjectsScreen;
