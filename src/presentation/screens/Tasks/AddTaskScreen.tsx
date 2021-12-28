import React from 'react';
import {View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';

const AddTaskScreen = () => {
  return (
    <View>
      <AppHeader label="Add Tasks" icon="close" size={20} />

      <AppText>Add Task Screen</AppText>
    </View>
  );
};

export default AddTaskScreen;
