import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from "react-native";

const backimage=require("../assets/backgroundImage.jpg");

const HomePage = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={backimage} style={{height:"100%",width:"100%"}}>
        <Text style={styles.header}>Resume Builder</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("General Details")} style={styles.btn}>
                <Text style={{color:"white",fontSize:30,textAlign:"center"}}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default HomePage

const styles = StyleSheet.create(
    { 
      header:{
          color:"white",
          fontSize:60,
          marginTop:"40%",
          textAlign:"center"
      },

      btn:{
          borderColor:"white",
          borderWidth:2,
          width:'50%',
          height:50,
          marginTop:50,
          marginLeft: 100,
          borderRadius:8,
          padding:2,
          textAlign: 'center',
      },

      img:{
        marginTop:80,
        marginLeft:"15%",
        width:"70%",
        height:"30%"
      },

      headerText:{
        color:"white",
        textAlign:"center",
        fontSize:50
      }
    }
)