import React from 'react';
import HomePage from './screens/HomePage';
import GeneralDetails from './screens/GeneralDetails';
import Education from './screens/Education';
import Skills from './screens/Skills';
import WorkExperience from './screens/Work Experience';
import Resume from './screens/Resume';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome"
          component={HomePage}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="General Details"
          component={GeneralDetails}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Education Details"
          component={Education}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Skills & Projects"
          component={Skills}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="Work Experience and Certification"
          component={WorkExperience}
          options={{headerShown: false}}
        />
      
        <Stack.Screen 
          name="Resume"
          component={Resume}
          
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}