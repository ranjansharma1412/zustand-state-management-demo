import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {ISubject} from '../model/subject';
import { useBoundStore } from '../store';
import Icon from 'react-native-vector-icons/Ionicons';

const SubjectList = ({navigation}) => {
  const subjects = useBoundStore((state) => state.subjects)
  const removeSubject = useBoundStore((state) => state.removeSubject)

  const _renderItem = ({item, index}: {item: ISubject; index: number}) => {
    return (
      <View key={index.toString()} style={styles.listItem}>
        <Text>Name: {item.name}</Text>
        <Text>Assigned Teacher : {item.assignedTeacher}</Text>
        <View style={styles.iconContainer}>
          <Icon
            name="create-outline"
            size={25}
            onPress={() => {
              navigation?.navigate('AddUpdateSubject', {subjectData: item});
            }}
          />
          <Icon
            name="close-circle-outline"
            size={25}
            onPress={() => {
              removeSubject(item.id);
            }}
          />
        </View>
      </View>
    );
  };

  const _listEmptyComponent=()=>{
    return(
      <View style={styles.listEmpty}>
        <Text>No record found ...</Text>
      </View>
    )
  }
  const _listHeaderComponent=()=>{
    return(
      <View style={styles.listHeader}>
        <Text style={{fontSize:16}}>Add/Update Subject</Text>
        <Text style={{color:'blue',fontSize:16}} onPress={()=>navigation?.navigate("AddUpdateSubject")}>Add New</Text>
      </View>
    )
  }

  return (
    <FlatList
      style={styles.listContainer}
      data={subjects}
      renderItem={_renderItem}
      ListEmptyComponent={_listEmptyComponent}
      ListHeaderComponent={_listHeaderComponent}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default SubjectList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingVertical: 8,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop:10
  },
  listEmpty:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10%'
  },
  listHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    height:45,
    backgroundColor:'white'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
});
