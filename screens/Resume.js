import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRoute } from '@react-navigation/native';

const image = require("../assets/resume.jpg")

const Resume = () => {

    const route = useRoute();

    return(
      <View style={styles.main}>
        <View style={styles.firsthalf}>
            <View style={styles.photo}>
              <Image source={image} style={styles.pic} />
            </View>
            <View style={styles.contact}>
              <Text style={styles.leftTitle}>CONTACT</Text>
              <Text style={styles.contactList}><FontAwesome name="envelope" size={11} /> {route.params.email}</Text>
              <Text style={styles.contactList}><FontAwesome name="phone" size={12} /> {route.params.mobile}</Text>
              <Text style={styles.contactList}><FontAwesome name="home" size={12} /> {route.params.address}</Text>
            </View>
            <View style={styles.skills}>
              <Text style={styles.leftTitle}>SKILLS</Text>
              <Text style={styles.contactList}><FontAwesome name="dot-circle-o" size={14} /> {route.params.skill1}</Text>
              <Text style={styles.contactList}><FontAwesome name="dot-circle-o" size={14} /> {route.params.skill2}</Text>
              <Text style={styles.contactList}><FontAwesome name="dot-circle-o" size={14} /> {route.params.skill3}</Text>
            </View>
            <View style={styles.extraActivity}>
              <Text style={styles.leftTitle}>SOCIAL PROFILE</Text>
              <Text style={styles.contactList}><FontAwesome name="github" size={14}/> {route.params.git}</Text>
              <Text style={styles.contactList}><FontAwesome name="linkedin" size={12} /> {route.params.linkedIn}</Text>
              <Text style={styles.contactList}><FontAwesome name="facebook" size={12} /> {route.params.facebook}</Text>                     
            </View>
            <View style={styles.certificate}>
              <Text style={styles.leftTitle}>CERTIFICATES</Text>
              <Text style={styles.contactList}><FontAwesome name="star" size={12} /> {route.params.c1}</Text>
              <Text style={styles.contactList}><FontAwesome name="star" size={12} /> {route.params.c2}</Text>
              <Text style={styles.contactList}><FontAwesome name="star" size={12} /> {route.params.c3}</Text>
            </View>
        </View>
        <View style={styles.secondhalf}>
            <View style={styles.name}>
                <Text style={styles.nameList}>{route.params.name}</Text>
                <Text style={styles.degreeList}>{route.params.degree}</Text>
            </View>
            <View style={styles.profile}>
              <Text style={styles.rightTitle}>PROFESSIONAL PROFILE</Text>
              <Text style={{fontSize: 11}}>{route.params.profProfile}</Text>
            </View>
            <View style={styles.education}>
              <Text style={styles.rightTitle}>EDUCATION</Text>
              <Text style={styles.educationListHeading}><FontAwesome name="graduation-cap" size={12} /> UNIVERSITY NAME</Text>
              <Text style={styles.educationList}>{route.params.universityName}</Text>
              <Text style={styles.educationListHeading}><FontAwesome name="calendar" size={12} /> PERIOD</Text>
              <Text style={styles.educationList}>{route.params.joinYear}-{route.params.graduatedYear}</Text>
              <Text style={styles.educationListHeading}><FontAwesome name="clipboard" size={12} /> CGPA</Text>
              <Text style={styles.educationList}>{route.params.cgpa}</Text>
              <Text style={styles.educationListHeading}><FontAwesome name="book" size={12} /> 12th PERCENTAGE</Text>
              <Text style={styles.educationList}>{route.params.class12}</Text>


            </View>
            <View style={styles.project}>
              <Text style={styles.rightTitle}>PROJECTS</Text>
              <Text style={styles.projectList}><FontAwesome name="file" size={10} /> {route.params.projectTitle_one} - {route.params.description_one}</Text>
              <Text style={styles.projectList}><FontAwesome name="file" size={10} /> {route.params.projectTitle_two} - {route.params.description_two}</Text>
            </View>
            <View style={styles.we}>
              <Text style={styles.rightTitle}>WORK EXPERIENCE</Text>
              <Text style={styles.projectList}><FontAwesome name="user" size={15} /> {route.params.we1}</Text>
              <Text style={styles.projectList}><FontAwesome name="user" size={15} /> {route.params.we2}</Text>
            </View>

        </View> 
      </View>
    )
  }

export default Resume

const styles=StyleSheet.create(
  {
    main:{
      height:"100%",
      backgroundColor:"#dec8c8",
      display:"flex",
      flexDirection:"row",
      justifyContent:'space-around'
    },

    firsthalf:{
      borderBottomEndRadius:10,
      borderBottomLeftRadius:10,
      marginLeft:"5%",
      height:"93%",
      fontSize:20,
      flex:1.5 ,
      backgroundColor:"#ebe1e1",
      display:"flex",
      flexDirection:"column",
      paddingLeft:3
    },
    secondhalf:{
      marginRight:"5%",
      height:"93%",
      flex:2,
      paddingLeft:"8%",
      display:"flex"
    },
    pic:{
        marginTop:"20%",
        marginLeft:"10%",
        height:100,
        width:100,
        borderRadius:50
    },
    photo:{
        flex:1.2
    },
    contact:{
      flex:1,
      fontSize: 10,
    },
    contactList:{
        paddingLeft:"10%",
        marginBottom:"8%",
        fontSize: 11,
    },
    skills:{
      flex:1,
      paddingTop: 50,
    },
    extraActivity:{
      flex:1.2,
      paddingTop: 30,
    },
    certificate:{
      flex:1,
    },
    name:{
      flex:.8,
      paddingTop:"20%",
      paddingBottom:"10%",
      paddingLeft:"10%"
    },
    nameList:{
      color:"#a66851",
      fontFamily:"serif",
      fontSize:22,
      fontWeight:"bold",
      marginBottom:5,
      textAlign:"center"
    },
    degreeList:{
      color:"#7b20bd",
      textAlign:"center"
    },
    profile:{
      flex:1.7
    },
    education:{
      flex:2.4
    },
    educationListHeading:{
      fontWeight:"bold",
      marginLeft:"5%",
      marginBottom:5 ,
      fontSize: 12,
    },
    educationList:{
      marginLeft:"10%",
      marginBottom:5,
      fontSize: 10,
    },
    project:{
      flex:1.7
    },
    we:{
      flex:1.5,
    },
    projectList:{
      marginLeft:"10%",
      marginBottom:10,
      fontSize: 11,
    },
    leftTitle:{
      color:"#7b20bd",
      marginBottom:5,
      fontWeight:"bold",
      fontSize: 13,
    },
    rightTitle:{
      backgroundColor:"#c29382",
      color:"white",
      borderBottomLeftRadius:5,
      paddingLeft:5,
      marginBottom:5,
      fontWeight:"bold",
    },
    btn: {
      height: "20%",
      width: "50%",
      marginTop: 30, 
      backgroundColor: 'red',
      borderRadius: 10,
      justifyContent: 'center'
    },
   
  }
)