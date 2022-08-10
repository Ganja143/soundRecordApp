import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Modal} from 'react-native';
// import { Button } from 'react-native-web';
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Register from "./Register";
import Recording from "./Recording";
import Login from "./Login";

const AppNavigator = createStackNavigator(
  {
    Login:Login,
    Register:Register,
    Recording:Recording,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "green",
      },
      headerTintColor: "red",
  },
}
);

const Navigator = createAppContainer(AppNavigator);


export default function App() {

  <Navigator>
   <Login />
  </Navigator>
 
}


