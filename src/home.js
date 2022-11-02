/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
 import { View,Text,Button,TouchableOpacity} from 'react-native';

 class HomeScreen extends Component {
   
   render(){
     return(
      <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
      }}>
          <Text>Home Screen1</Text>
          <Button 
            title="To User Screen"
            onPress={() => this.props.navigation.navigate('User',{
            userIdx:100,
            userName:'jinhee',
            userLastName:'byeon'
            })}
            />

            <TouchableOpacity>
            <Button
            title="change the title"
            onPress={()=>
            this.props.navigation.setOptions({
                title:'changed!!!',
                headerStyle:{
                    backgroundcolor:'pink'
                },

                headerTintColor:'red',
            })
            }
            />
            </TouchableOpacity>
      </View>
     )
 
   }
 }
 
 export default HomeScreen;
 