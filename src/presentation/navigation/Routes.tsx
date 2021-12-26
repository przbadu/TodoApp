import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Theme} from '@react-navigation/native';

import {RootStackParamsList} from '.';
import HomeScreen from '../screens/Home/HomeScreen';
import TasksScreen from '../screens/Tasks/TasksScreen';
import {darkTheme} from '../../const/theme';
import Header from '../components/Header';

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
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Tasks" component={TasksScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};