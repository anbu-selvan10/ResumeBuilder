import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Education = () => {
  const [universityName, setUniversityName] = useState("");
  const [degree, setDegree] = useState("");
  const [joinYear, setjoinYear] = useState("");
  const [graduatedYear, setGraduatedYear] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [class12, setClass12] = useState("");

  const navigation = useNavigation();

  const route = useRoute();

  const register = () => {
    navigation.navigate("Skills & Projects",{
      universityName: universityName,
      degree: degree,
      joinYear: joinYear,
      graduatedYear: graduatedYear,
      cgpa: cgpa,
      class12: class12,
      name: route.params.name,
      email: route.params.email,
      address: route.params.address,
      age: route.params.age,
      profProfile: route.params.profProfile,
      mobile: route.params.mobile,
      linkedIn: route.params.linkedIn,
      git: route.params.git,
      facebook: route.params.facebook,
    })
  }

  return(
  <ScrollView style={{width: '100%'}}>
    <View style={{margin:20,marginTop:40,borderColor:'black'}}>
      <Text style={styles.headText}>Educational Details</Text>

      <TextInput placeholder='Name of the Degree'
      value={degree}
      onChangeText={(text)=>setDegree(text)}
      style={styles.bodyText}
      />

      <TextInput placeholder='12th Percentage'
      keyboardType='numeric'
      maxLength={5}
      value={class12}
      onChangeText={(text)=>setClass12(text)}
      style={styles.bodyText}
      />

      <TextInput placeholder='University Name'
      value={universityName}
      onChangeText={(text)=>setUniversityName(text)}
      style={styles.bodyText}
      />
      
      <TextInput placeholder='Year of Joining'
      keyboardType="numeric"
      maxLength={4}
      value={joinYear}
      onChangeText={(text)=>setjoinYear(text)}
      style={styles.bodyText}
      />

      <TextInput placeholder='Graduated Year'
      keyboardType='numeric'
      maxLength={4}
      value={graduatedYear}
      onChangeText={(text)=>setGraduatedYear(text)}
      style={styles.bodyText}
      />

      <TextInput placeholder='CGPA'
      keyboardType='numeric'
      value={cgpa}
      onChangeText={(text)=>setCgpa(text)}
      style={styles.bodyText}
      />

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {
          if ((universityName.trim() == "") || (degree.trim() == "") || (joinYear.trim() == "") || (graduatedYear.trim() == "") || (class12.trim() == "") || (cgpa.trim() == "")) {
            alert("Fill all the details")
          }else{
            register()
          }
        }} style={styles.btn}><Text style={{padding: 5, textAlign: 'center'}}>Next</Text></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  )
  }

const styles=StyleSheet.create(
  {
    headText:{
      borderColor:'black',
      borderWidth:0.3,
      paddingVertical:10,
      textAlign: 'center',
      fontSize:30,
      marginBottom:20
    },

    bodyText: {
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: 'skyblue',
      margin: 10,
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'center',
    }, 

    btn: {
      height: 40,
      width: 90,
      marginTop: 30, 
      backgroundColor: 'skyblue',
      borderRadius: 10,
      justifyContent: 'center'
    },
  }
)

export default Education