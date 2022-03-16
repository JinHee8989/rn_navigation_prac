/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {StyleSheet, Image, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';
import LogoTitle from './src/logo';

const Stack = createNativeStackNavigator();

class App extends Component {

  logoTitle = () => {
    return (
      <Image 
      style={{width: 40, height:40 }}
      source={require('./src/assets/pics/kid_icon.png')} 
      />
    )
  }
  
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
         screenOptions={{
          headerStyle:{
            backgroundcolor:'yellow'
          },
          headerTintColor:'grey',
          headerTitleStyle:{
            fontWeight:'bold',
            color:'red',
          }
          
        }}
        >
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              option={{
                title:'Home Screen',
                headerTitle:{LogoTitle},
                headerRight: ()=> (
                  <Button
                    title="Info"
                    onPress={()=>alert('I am a button')}
                    color='orange'
                  />
                )
              
              }}

            />
            <Stack.Screen 
              name="User" 
              component={UserScreen} 
              initialParams={{
                userIdx:50,
                userName:'gildong',
                userLastName:'go'
            }}
            // option={{
            //   title:'User Screen',
            //   headerStyle:{
            //     backgroundcolor:'pink'
            //   },
            //   headerTintColor:'red',
            //   headerTitleStyle:{
            //     fontWeight:'bold',
            //     color:'purple',
            //   }
              
            // }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}

const styles = StyleSheet.create({
 
});

export default App;
