import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const GeneralDetails = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [git, setGit] = useState("");
    const [facebook, setFacebook] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [profProfile, setprofProfile] = useState("");

    const navigation = useNavigation();

    /*useEffect( async () => {
      if (Platform.OS !== 'web'){
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== granted){
          alert('Permission denied!')
        }
      }
    },[])

    const PickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality:1
      })
      console.log(result)
      if(!result.canceled){
        setImage({image: result.assets[0].uri})
      }
    }*/

    const register = () => {
      navigation.navigate("Education Details", {
        name: name,
        email: email,
        mobile: mobile,
        linkedIn: linkedIn,
        git: git,
        facebook: facebook,
        address: address,
        age: age,
        profProfile: profProfile,
      })
    }

    return (
    <ScrollView style={{width: '100%'}}>
      <View style={{margin: 20, marginTop: 40}}>
          <Text style={styles.headText}>General Details</Text>
          <TextInput
          placeholder = " Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          />
          <TextInput
          placeholder = " Age"
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
          />
          <TextInput
          placeholder = " Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
          />
          <TextInput
          placeholder = " Mobile No"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
          style={styles.input}
          />     
          <TextInput
          placeholder = " Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          />
          <TextInput
          placeholder = " LinkedIn"
          value={linkedIn}
          onChangeText={(text) => setLinkedIn(text)}
          style={styles.input}
          />
          <TextInput
          placeholder = " GitHub"
          value={git}
          onChangeText={(text) => setGit(text)}
          style={styles.input}
          />
          <TextInput
          placeholder = " FaceBook"
          value={facebook}
          onChangeText={(text) => setFacebook(text)}
          style={styles.input}
          />
          <TextInput
          multiline
          maxLength={150}
          placeholder = " Tell us about your professional profile"
          value={profProfile}
          onChangeText={(text) => setprofProfile(text)}
          style={styles.gapinput}
          />
          <View style={{alignItems: 'center'}}>
           <TouchableOpacity onPress={() => {}} style={styles.btn2}><Text style={{padding: 5, textAlign: 'center'}}><FontAwesome name='upload' size={12}/> Upload Image</Text></TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
           <TouchableOpacity onPress={() => {
            if ((name.trim() == "") || (email.trim() == "") || (mobile.trim() == "") || (linkedIn.trim() == "") || (git.trim() == "") || (address.trim() == "") || (profProfile.trim() == "") || (age.trim() == "") || (facebook.trim() == "")) {
              alert("Fill all the details")
            }else{
              register()
            }
           }} style={styles.btn}><Text style={{padding: 5, textAlign: 'center'}}>Next</Text></TouchableOpacity>
          </View>
          <StatusBar style="auto" />
      </View>
    </ScrollView>
    ); 
}

const styles = StyleSheet.create({
  headText:{
    borderColor: 'black',
    borderWidth: 0.3,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
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
  },

  gapinput: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'skyblue',
    margin: 10,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 90,
  },

  btn: {
    height: 40,
    width: 90,
    marginTop: 30, 
    backgroundColor: 'skyblue',
    borderRadius: 10,
    justifyContent: 'center'
  },

  btn2: {
    height: 40,
    width: "80%",
    marginTop: 30, 
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center'
  },
});

export default GeneralDetails