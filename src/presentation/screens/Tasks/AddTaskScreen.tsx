import React from 'react';
import {View, Text} from 'react-native';
import BackButton from '../../components/BackButton';

const AddTaskScreen = () => {
  return (
    <View>
      <BackButton />
      <Text>add Tasks</Text>
    </View>
  );
};

export default AddTaskScreen;
