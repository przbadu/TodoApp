import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppTextInput from '../../components/AppTextInput';

const AddProjectScreen = () => {
  const handleChange = () => {};

  return (
    <View style={styles.container}>
      <AppHeader label="Add Project" icon="close" size={20} />

      <View style={styles.contentWrapper}>
        <AppTextInput label="Project Name" onChange={handleChange} />
        <AppTextInput label="Color" onChange={handleChange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  contentWrapper: {
    marginTop: 20,
  },
});

export default AddProjectScreen;
