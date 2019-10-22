import React from 'react'
import {TouchableOpacity,Text,Image,StyleSheet,Alert} from 'react-native'

export const BackButton=()=>{
    return(
        <TouchableOpacity style={Style.backStyle}
        onPress={()=>Alert.alert("Back Button Pressed")}>
            <Image 
            source={require('./footerImages/backButton.png')}/>
        </TouchableOpacity>
    )
}
const Style=StyleSheet.create({
    backStyle:{
        backgroundColor:"#FB9701",
        width:30,
        height:30,
        alignItems:'center',
        borderRadius:50,
        marginTop:10,
        top:30,
        left:5,
        position:'absolute',
        marginLeft:20
    },
   
})