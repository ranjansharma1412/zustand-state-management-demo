import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StudentList from './src/screen/StudentList';
import SubjectList from './src/screen/SubjectList';
import AddUpdateStudent from './src/screen/AddUpdateStudent';
import AddUpdateSubject from './src/screen/AddUpdateSubject';
import Home from './src/screen/Home';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="StudentList" component={StudentList} />
      <Stack.Screen name="AddUpdateStudent" component={AddUpdateStudent} />
      <Stack.Screen name="SubjectList" component={SubjectList} />
      <Stack.Screen name="AddUpdateSubject" component={AddUpdateSubject} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
