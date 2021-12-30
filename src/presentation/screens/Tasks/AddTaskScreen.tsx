import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';
import AppTextInput from '../../components/AppTextInput';

const AddTaskScreen = () => {
  const [form, setForm] = useState({name: '', color: ''});
  return (
    <View style={styles.container}>
      <AppHeader label="Add Tasks" icon="close" size={20} />

      <View style={styles.contentWrapper}>
        <AppTextInput
          label="What's in your mind?"
          value={form.name}
          autoFocus
          onChangeText={text => setForm({...form, name: text})}
        />
        <AppButton
          label="Add Project"
          icon="plus"
          containerStyles={{marginTop: 20}}
        />
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

export default AddTaskScreen;
