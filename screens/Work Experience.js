import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const image = require("../assets/resume.jpg")

const WorkExperience = () => {
    const [we1, setW1] = useState("");
    const [we2, setW2] = useState("");
    const [c1, setC1] = useState("");
    const [c2, setC2] = useState("");
    const [c3, setC3] = useState("");
    
    const navigation = useNavigation();

    const route = useRoute();

    const html=`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
      <style>
      .main{
          height:100%;
          background-color:#dec8c8;
          display:flex;
          flex-direction:row;
          justify-content:space-around;
        }
        .firsthalf{
          border-radius: 0 0 20px 20px;
          margin-left:5%;
          height:95%;
          font-size:15px;
          flex:1.5 ;
          background-color:#ebe1e1;
          display:flex;
          flex-direction:column;
          padding-left:3;
        }
        .secondhalf{
          margin-right:5%;
          height:93%;
          flex:2;
          padding-left:8%;
          display:flex;
          flex-direction:column;
        }
        .pic{
            margin-top:2%;
            margin-left:20%;
            height:100px;
            width:100px;
            border-radius:50px;
            border-width:5px;
        }
        .photo{
            flex:1;
        }
        .contact{
          flex:.8;
        }
        .contactList{
            padding-left:10%;
            margin-bottom:8%;
        }
        .skills{
          flex:1;
        }
        .extraActivity{
          flex:.7;
        }
        .certificate{
          flex:1;
        }
        .name{
          flex:.8;
          padding-top:10%;
          padding-bottom:10%;
          padding-left:10%;
        }
        .nameList{
          color:#a66851;
          font-family:serif;
          font-size:22;
          font-weight:bold;
          margin-bottom:5;
          text-align:center;
        }
        .degreeList{
          color:#7b20bd;
          text-align:center;
        }
        .profile{
          flex:1.5;
        }
        .education{
          flex:1;
        }
        .educationListHeading{
          font-weight:bold;
          margin-left:5%;
          margin-bottom:5 ;
        }
        .educationList{
          margin-left:4%;
          margin-bottom:5;
          font-size: 15px;
        }
        .project{
          flex:.9;
        }
        .projectList{
          margin-left:4%;
          margin-bottom:10;
          font-size:14px;
        }
        .leftTitle{
          color:#7b20bd;
          font-weight:bold;
          margin-left:7%;
        }
        .rightTitle{
          background-color:#c29382;
          color:white;
          border-radius:10px 0 0 10px;
          margin-bottom:5;
          font-weight:bold;
          padding-left:10px;
          padding-top:5px;
          padding-bottom:5px;
      
        }
        .professionalPara{
          font-size:15px;
        }
        i{
          margin-right:8px;
        }
      </style>
  </head>
  <body>
      <div class="main" >
          <div class="firsthalf">
              <div class="photo">
                <img src="Resume Builder/ResumeBuilder/assets/resume.jpg" class="pic"/>
              </div>
              <div class="contact">
                <p class="leftTitle">CONTACT</p>
                <p class="contactList"><i class="fa-solid fa-envelope" style="font-size:11 px;"></i>${route.params.email}</p>
                <p class="contactList"><i class="fa-solid fa-phone" style="font-size:12 px;"></i>${route.params.mobile}</p>
                <p class="contactList"><i class="fa-solid fa-house" style="font-size:12 px;"></i>${route.params.address}</p>
              </div>
              <div class="skills">
                <p class="leftTitle">SKILLS</p>
                <p class="contactList"><i class="fa-regular fa-circle-dot" style="font-size:15 px;"></i>${route.params.skill1}</p>
                <p class="contactList"><i class="fa-regular fa-circle-dot" style="font-size:15 px;"></i>${route.params.skill2}</p>
                <p class="contactList"><i class="fa-regular fa-circle-dot" style="font-size:15 px;"></i>${route.params.skill3}</p>
              </div>
              <div class="extraActivity">
                <p class="leftTitle">SOIAL PROFILE</p>
                <p class="contactList"><i class="fa-brands fa-github" style="font-size:14 px;"></i>${route.params.git}</p>
                <p class="contactList"><i class="fa-brands fa-linkedin" style="font-size:12 px;"></i>${route.params.linkedIn}</p>
                <p class="contactList"><i class="fa-brands fa-facebook" style="font-size:12 px;"></i>${route.params.facebook}</p>                    
              </div>
              <div class="certificate">
                <p class="leftTitle">CERTIFICATES</p>
                <p class="contactList"><i class="fa-solid fa-star" style="font-size:12 px;"></i>${c1}</p>
                <p class="contactList"><i class="fa-solid fa-star" style="font-size:12 px;"></i>${c2}</p>
                <p class="contactList"><i class="fa-solid fa-star" style="font-size:12 px;"></i>${c3}</p>
  
              </div>
          </div>
          <div class="secondhalf">
              <div class="name">
                  <p class="nameList">${route.params.name}</p>
                  <p class="degreeList">${route.params.degree}</p>
              </div>
              <div class="profile">
                <p class="rightTitle">PROFESSIONAL PROFILE</p>
                  <p class="professionalPara">${route.params.profProfile}</p>
  
              </div>
              <div class="education">
                <p class="rightTitle">EDUCATION</p>
                <p class="educationListHeading"><i class="fa-solid fa-graduation-cap"></i>UNIVERSITY NAME</p>
                <p class="educationList">${route.params.universityName}</p>
                <p class="educationListHeading"><i class="fa-regular fa-calendar-days"></i>PERIOD</p>
                <p class="educationList">${route.params.joinYear}-${route.params.graduatedYear}</p>
                <p  class="educationListHeading"><i class="fa-sharp fa-solid fa-clipboard-list"></i>CGPA</p>
                <p class="educationList">${route.params.cgpa}</p>
                <p  class="educationListHeading"><i class="fa-solid fa-book"></i>12th PERCENTAGE</p>
                <p  class="educationList">${route.params.class12}</p>
  
  
              </div>
              <div class="project">
                <p class="rightTitle">PROJECTS</p>
                <p class="projectList"><i class="fa-solid fa-file"></i>${route.params.projectTitle_one}-${route.params.description_one}</p>
                <p class="projectList"><i class="fa-solid fa-file"></i>${route.params.projectTitle_two}-${route.params.description_two}</p>
              </div>
              <div class="project">
                <p class="rightTitle">WORK EXPERIENCE</p>
                <p class="projectList"><i class="fa-sharp fa-solid fa-user-tie"></i>${we1}</p>
                <p class="projectList"><i class="fa-sharp fa-solid fa-user-tie"></i>${we2}</p>
              </div>
  
          </div>
  
  
        </div> 
      </body>
  </html>
  `;

  let generatePdf= async () => {
      const file = await Print.printToFileAsync({
        html: html,
        base64:false
      });

      await Sharing.shareAsync(file.uri);
  };

    const register = () => {
        navigation.navigate("Resume",{
        we1: we1,
        we2: we2,
        c1: c1,
        c2: c2,
        c3: c3,
        skill1: route.params.skill1,
        skill2: route.params.skill2,
        skill3: route.params.skill3,
        skill4: route.params.skill4,
        projectLink_one: route.params.projectLink_one,
        projectTitle_one: route.params.projectTitle_one,
        description_one: route.params.description_one,
        projectLink_two: route.params.projectLink_two,
        projectTitle_two: route.params.projectTitle_two,
        description_two: route.params.description_two,
        universityName: route.params.universityName,
        degree: route.params.degree,
        joinYear: route.params.joinYear,
        graduatedYear: route.params.graduatedYear,
        cgpa: route.params.cgpa,
        class12: route.params.class12,
        name: route.params.name,
        email: route.params.email,
        age: route.params.age,
        profProfile: route.params.profProfile,
        address: route.params.address,
        mobile: route.params.mobile,
        linkedIn: route.params.linkedIn,
        git: route.params.git,
        facebook: route.params.facebook,
        })
      }

    return(
        <ScrollView style={{width:"100%"}}>
        <View style={{margin:20,marginTop:40}}>
            <Text style={styles.headText}>Work Experience & Certification</Text>

            <Text style={styles.subText}>Work Experience</Text>

              <TextInput placeholder='Tell us about your work experience'
              multiline
              maxLength={90}
              value={we1}
              onChangeText={(text)=>setW1(text)}
              style={styles.input} />

              <TextInput placeholder='Another one?'
              multiline
              maxLength={90}
              value={we2}
              onChangeText={(text)=>setW2(text)}
              style={styles.input} />

            <Text style={styles.subText}>Certification</Text>

              <TextInput placeholder='Certificate Name'
              value={c1}
              onChangeText={(text)=>setC1(text)}
              style={styles.bodyText} />
              <TextInput placeholder='Certificate Name'
              value={c2}
              onChangeText={(text)=>setC2(text)}
              style={styles.bodyText} />
              <TextInput placeholder='Certificate Name'
              value={c3}
              onChangeText={(text)=>setC3(text)}
              style={styles.bodyText} />

            
        <View style={{alignItems: 'center'}}>
           <TouchableOpacity onPress={() => {
            if ((we1.trim() == "") || (we2.trim() == "") || (c1.trim() == "") || (c2.trim() == "") || (c3.trim() == "")) {
              alert("Fill all the details")
            }else{
              register()
            }
           }} style={styles.btn}><Text style={{padding: 5, textAlign: 'center'}}>Preview Resume</Text></TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
           <TouchableOpacity onPress={() => {
            if ((we1.trim() == "") || (we2.trim() == "") || (c1.trim() == "") || (c2.trim() == "") || (c3.trim() == "")) {
              alert("Fill all the details")
            }else{
              generatePdf()
            }
           }} style={styles.btn2}><Text style={{padding: 5, textAlign: 'center'}}><FontAwesome name='download' size={12}/> Download PDF</Text></TouchableOpacity>
        </View>
     
    </View>
    </ScrollView>
  )
}

export default WorkExperience

const styles=StyleSheet.create(
{
  headText:{
    borderColor:'black',
    borderWidth:0.3,
    paddingVertical:10,
    fontSize:30,
    marginBottom:20,
    textAlign: 'center'
  },
  subText:{
    textAlign:"center",
    fontSize:20,
    paddingTop: 20,
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
    height: 90,
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
    width: "80%",
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

}
)