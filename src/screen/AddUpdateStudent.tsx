import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputField from '../components/InputField';
import ActionButton from '../components/ActionButton';
import {IStudent} from '../model/student';
import {getUUID} from '../utils/stringUtils';
import {useBoundStore} from '../store';

const AddUpdateStudent = ({navigation, route}) => {
  const studentData = route?.params?.studentData;
  const _id = studentData?.id;
  const [name, setName] = useState(studentData?.name || '');
  const [rollNo, setRollNo] = useState(String(studentData?.rollNo||''));
  const [email, setEmail] = useState(studentData?.email || '');
  const [mobileNo, setMobileNo] = useState(studentData?.mobileNo || '');

  const addStudent = useBoundStore(state => state.addStudent);
  const updateStudent = useBoundStore(state => state.updateStudent);

  const addOrUpdate = () => {
    let studentObj: IStudent = {
      id: _id || getUUID(),
      name,
      rollNo: Number(rollNo),
      email,
      mobileNo,
    };
    if (_id) {
      updateStudent(studentObj);
    } else {
      addStudent(studentObj);
    }
    navigation?.navigate('StudentList');
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.headerText}> Add/Update Student</Text>
      <InputField
        value={name}
        placeholder='Name'
        onChangeText={setName}
        customStyle={{marginTop: 15}}
      />
      <InputField
        value={rollNo}
        placeholder='Roll No.'
        onChangeText={setRollNo}
        customStyle={{marginTop: 15}}
      />
      <InputField
        value={email}
        placeholder='Email'
        onChangeText={setEmail}
        customStyle={{marginTop: 15}}
      />
      <InputField
        value={mobileNo}
        placeholder='Mobile No.'
        onChangeText={setMobileNo}
        customStyle={{marginTop: 15}}
      />
      <View style={styles.buttonContainer}>
        <ActionButton text="Submit" onPress={addOrUpdate} />
      </View>
    </View>
  );
};

export default AddUpdateStudent;

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
    marginVertical:30
  },
});
