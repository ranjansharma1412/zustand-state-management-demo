import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../components/InputField';
import ActionButton from '../components/ActionButton';
import {getUUID} from '../utils/stringUtils';
import {useBoundStore} from '../store';
import {ISubject} from '../model/subject';

const AddUpdateSubject = ({navigation, route}) => {
  const subjectData = route?.params?.subjectData;
  const _id = subjectData?.id;

  const [name, setName] = useState(subjectData?.name || '');
  const [assignedTeacher, setAssignedTeacher] = useState(
    subjectData?.assignedTeacher || '',
  );

  const addSubject = useBoundStore(state => state.addSubject);
  const updateSubject = useBoundStore(state => state.updateSubject);

  const addOrUpdate = () => {
    let subjectObj: ISubject = {
      id: _id || getUUID(),
      name,
      assignedTeacher,
    };
    if (_id) {
      updateSubject(subjectObj);
    } else {
      addSubject(subjectObj);
    }
    navigation?.navigate('SubjectList');
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.headerText}> Add/Update Subject</Text>
      <InputField
        value={name}
        placeholder='Subject name'
        onChangeText={setName}
        customStyle={{marginTop: 15}}
      />
      <InputField
        value={assignedTeacher}
        placeholder='Assigned Teacher name'
        onChangeText={setAssignedTeacher}
        customStyle={{marginTop: 15}}
      />
      <View style={styles.buttonContainer}>
        <ActionButton text="Submit" onPress={addOrUpdate} />
      </View>
    </View>
  );
};

export default AddUpdateSubject;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    height: 45,
    marginTop: 50,
  },
  headerText: {
    textAlign: 'center',
    height: 50,
    fontSize: 18,
    color: 'red',
    marginVertical: 30,
  },
});
