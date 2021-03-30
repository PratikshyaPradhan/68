import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import FBScreen from './Screens/FBScreen';
import IGScreen from './Screens/IGScreen';



export default function App() {
  return (       
     <AppContainer /> 
  );
}



var school= createSwitchNavigator({
  IGScreen : IGScreen,
  FBScreen : FBScreen
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if(routeName === "Instagram"){
          return(
            <Image
            source={require("./assets/fb.jpg")}
            style={{width:40, height:40}}
          />
          )
          
        }
        else if(routeName === "Facebook"){
          return(
            <Image
            source={require("./assets/instagram.jpg")}
            style={{width:40, height:40}}
          />)
          
        }
      }
    })
  }
  );

  var Container = createAppContainer(school);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });