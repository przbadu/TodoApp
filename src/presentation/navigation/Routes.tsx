import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamsList} from '.';
import ProjectsScreen from '../screens/Projects/ProjectsScreen';
import TasksScreen from '../screens/Tasks/TasksScreen';
import {darkTheme} from '../../const/theme';
import AddProjectScreen from '../screens/Projects/AddProjectScreen';
import AddTaskScreen from '../screens/Tasks/AddTaskScreen';

const RootStack = createStackNavigator<RootStackParamsList>();

export default () => {
  const [theme] = useState(darkTheme);

  return (
    <NavigationContainer theme={theme}>
      {/* Override statusbar depending on theme color */}
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />

      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Home" component={ProjectsScreen} />
        <RootStack.Screen name="AddProject" component={AddProjectScreen} />
        <RootStack.Screen name="Tasks" component={TasksScreen} />
        <RootStack.Screen name="AddTask" component={AddTaskScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
