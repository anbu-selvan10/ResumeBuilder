import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const Skills = () => {
    const [projectTitle_one, setPT1] = useState("");
    const [projectLink_one, setPL1] = useState("");
    const [description_one, setD1] = useState("");
    const [projectTitle_two, setPT2] = useState("");
    const [projectLink_two, setPL2] = useState("");
    const [description_two, setD2] = useState("");
    const [skill1, setS1] = useState("");
    const [skill2, setS2] = useState("");
    const [skill3, setS3] = useState("");
    const [skill4, setS4] = useState("");
    
    const navigation = useNavigation();

    const route = useRoute();

    const register = () => {
      navigation.navigate("Work Experience and Certification",{
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        skill4: skill4,
        projectLink_one: projectLink_one,
        projectTitle_one: projectTitle_one,
        description_one: description_one,
        projectLink_two: projectLink_two,
        projectTitle_two: projectTitle_two,
        description_two: description_two,
        universityName: route.params.universityName,
        degree: route.params.degree,
        joinYear: route.params.joinYear,
        graduatedYear: route.params.graduatedYear,
        cgpa: route.params.cgpa,
        class12: route.params.class12,
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
        <ScrollView style={{width:"100%"}}>
        <View style={{margin:20,marginTop:40}}>
            <Text style={styles.headText}>Skills & Projects</Text>

            <Text style={styles.subText}>Skills</Text>

              <TextInput placeholder='Skill 1'
              value={skill1}
              onChangeText={(text)=>setS1(text)}
              style={styles.bodyText} />
              <TextInput placeholder='Skill 2'
              value={skill2}
              onChangeText={(text)=>setS2(text)}
              style={styles.bodyText} />
              <TextInput placeholder='Skill 3'
              value={skill3}
              onChangeText={(text)=>setS3(text)}
              style={styles.bodyText} />

            <Text style={styles.subText}>Project 1</Text>

            { <TextInput placeholder='Project Title'
            value={projectTitle_one}
            onChangeText={(text)=>setPT1(text)}
            style={styles.bodyText}
            /> }
            
            <TextInput placeholder='Description'
            multiline
            maxLength={60}
            value={description_one}
            onChangeText={(text)=>setD1(text)}
            style={styles.input}
            />

        <Text style={styles.subText}>Project 2</Text>

        { <TextInput placeholder='Project Title'
            value={projectTitle_two}
            onChangeText={(text)=>setPT2(text)}
            style={styles.bodyText}
            /> }
            
            <TextInput placeholder='Description'
            multiline
            maxLength={60}
            value={description_two}
            onChangeText={(text)=>setD2(text)}
            style={styles.input}
            />

        <View style={{alignItems: 'center'}}>
           <TouchableOpacity onPress={() => {
            if ((skill1.trim() == "") || (skill2.trim() == "") || (skill3.trim() == "") || (projectTitle_one.trim() == "") || (description_one.trim() == "")) {
              alert("Fill all the details")
            }else{
              register()
            }
           }} style={styles.btn}><Text style={{padding: 5, textAlign: 'center'}}>Next</Text></TouchableOpacity>
        </View>
     
    </View>
    </ScrollView>
  )
}

export default Skills

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
  subText:{
    textAlign:"center",
    fontSize:20,
    paddingTop: 20,
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
  
  input: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'skyblue',
    margin: 10,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
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