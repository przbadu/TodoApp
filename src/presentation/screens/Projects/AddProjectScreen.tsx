import React from 'react';
import {View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppText from '../../components/AppText';

const AddProjectScreen = () => {
  return (
    <View>
      <AppHeader label="Add Project" icon="close" size={20} />
      <AppText>Add Project</AppText>
    </View>
  );
};

export default AddProjectScreen;
