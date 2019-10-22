import React from 'react'
import {TouchableOpacity,Image,StyleSheet,Alert} from 'react-native'

export const FloatingButton = () =>{
   
        return(
           
            <TouchableOpacity style={Styles.floatStyle}
                onPress={()=>Alert.alert('Floating Button Pressed')}>
                <Image source={require('./footerImages/floatButtonImage.png')} 
                style={Styles.imgStyle}/>
            </TouchableOpacity>
            
        )
    
}
const Styles=StyleSheet.create({
    floatStyle:{
        backgroundColor:"#FB9701",
        width:50,
        height:50,
        alignItems:'center',
        borderRadius:50,
        bottom:100,
        right:5,
        position:'absolute',
        justifyContent:'center'
    },
    imgStyle:{
    width:30,
    height:30   
    }
})