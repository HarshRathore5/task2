import React from 'react'
import {View,StyleSheet, SafeAreaView , ScrollView,Text} from 'react-native'
import {Header} from './task3/header'
import { Label } from './task3/label'
import { MainView } from './task3/mainView'
import { RepeatView } from './task3/repeatView'
import {FloatingButton} from './floatingButton'
import {TabBar} from './tabBar'

export default class App extends React.Component{
  render(){
    return(  
    
      <SafeAreaView style={{flex:1}}>
      <Header/>
      <ScrollView>
      <Label/>
      <MainView/>
      <RepeatView/>
      <RepeatView/>
      </ScrollView>
      <FloatingButton/>
      <TabBar/>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  appThemeStyle:{
    height:80,
    width:"100%",
    backgroundColor:'#FB9701',
    alignItems:'center'
  },
  textStyle:{
    fontWeight:'bold',
    color:'ghostwhite',
    fontSize:28,
    marginTop:40
  }
})