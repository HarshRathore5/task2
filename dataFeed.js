import React from 'react';
import {Text,SafeAreaView,StyleSheet,View} from 'react-native';
import PrizeViews from './prizeViews'
import { TabBar } from './tabBar'
import {Header} from './header'
export const Roads = () => {
  return (
      <SafeAreaView style={{backgroundColor:"#FB9701"}}>
          <Header/>
    <View style={Styles.dataStyle}>
        
        <View>
        <Text style={Styles.roadTextStyle}>Roads less travelled</Text>
        <Text style={Styles.lightTextStyle}>1 day left</Text>
        </View>
        <View>
        <Text style={Styles.timeStyle}>Total Prize</Text>
        <Text style={Styles.prizeStyle}>$ 220</Text>
        </View>
    </View>
    
    </SafeAreaView>
  );
};

export default Roads;

const Styles=StyleSheet.create({
    dataStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    roadTextStyle:{
        fontSize:20,
        fontWeight:'bold'
    },
    lightTextStyle:{
        color:'gray'
    },
    prizeStyle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FDBD23'
    }
})