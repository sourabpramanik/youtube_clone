import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {TabOneParamList } from '../types';
import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native';
import { Feather,AntDesign, FontAwesome } from "@expo/vector-icons";
const logo = require ('../assets/images/logo.png')

const HomeStack = createStackNavigator<TabOneParamList>();

function CustomHeader(){

  return (
    <SafeAreaView style={{backgroundColor:"#000"}}>
        <View
            style={{
                margin:10,
                padding:5,
                backgroundColor:"#000",
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
            <Image source={logo} resizeMode='contain' style={{width:100, height:25}}/>    
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:"space-between",
                    width: 120,
                }}
            >
                <Feather name="cast" size={20} color="white"/>
                <AntDesign name="bells" size={20} color="white"/>
                <AntDesign name="search1" size={20} color="white"/>
                <FontAwesome name="user-circle" size={20} color="white"/>
            </View>
        </View>
    </SafeAreaView>
  );
}
function HomeStackComponent() {
  return (
    <HomeStack.Navigator
        screenOptions={{
            header:() =><CustomHeader/>
        }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackComponent