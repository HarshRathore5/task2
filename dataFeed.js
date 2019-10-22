import React from 'react';
import {Text,ScrollView,StyleSheet,View} from 'react-native';
import PrizeViews from './prizeViews'
import Description, { Rules } from './rulesAndInfo';

export const Roads = () => {
  return (
      <ScrollView >
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
    <PrizeViews/>
    <Description/>
    <Rules/>
    </ScrollView>
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