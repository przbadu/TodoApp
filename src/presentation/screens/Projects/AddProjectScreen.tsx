import randomColor from 'randomcolor';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';
import AppTextInput from '../../components/AppTextInput';
import Heading from '../../components/Heading';
import GridItem from './components/GridItem';
import ListItem from './components/ListItem';

const AddProjectScreen = () => {
  const [form, setForm] = useState({
    id: 20,
    tasksCount: 10,
    name: '',
    color: randomColor(),
  });

  return (
    <View style={styles.container}>
      <AppHeader label="Add Project" icon="close" size={20} />

      <View style={styles.contentWrapper}>
        <AppTextInput
          autoFocus
          label="Project Name"
          value={form.name}
          onChangeText={text => setForm({...form, name: text})}
        />
        <AppTextInput
          label="Color"
          value={form.color}
          onChangeText={text => setForm({...form, name: text})}
        />
        <AppButton
          label="Add Project"
          icon="plus"
          containerStyles={{marginTop: 20}}
        />
      </View>

      <View style={styles.contentWrapper}>
        <Heading>PREVIEW</Heading>

        {/* list view preview */}
        <View style={{marginTop: 10}}>
          {form.name ? <ListItem item={form} /> : null}
        </View>

        {/* grid view preview */}
        <View style={{marginTop: 10}}>
          {form.name ? <GridItem item={form} /> : null}
        </View>
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
