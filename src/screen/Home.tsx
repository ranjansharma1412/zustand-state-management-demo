import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionButton from '../components/ActionButton'

const Home = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        <ActionButton text="Student list" onPress={()=>navigation?.navigate("StudentList")} />
      </View>
      <View style={styles.buttonContainer}>
        <ActionButton text="Subject list" onPress={()=>navigation?.navigate("SubjectList")} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20
    },
    buttonContainer: {
        height: 45,
        marginTop: 30,
      },
})