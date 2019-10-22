import React from 'react'
import {View,TouchableOpacity,StyleSheet,Image,Alert} from 'react-native'

export  const TabBar = () =>{
   
        return(
            <View style={Style.viewStyle}>
                <TouchableOpacity 
                onPress={()=>Alert.alert("Home Button Pressed")}>
                    <Image source={require('./footerImages/home.png')}
                    style={Style.iconsStyle}/>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> Alert.alert("Search Button Pressed")}>
                    <Image source={require('./footerImages/search.png')}
                    style={Style.iconsStyle}/>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> Alert.alert("Person Button Pressed")}>
                    <Image source={require('./footerImages/person.png')}/>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> Alert.alert("Notification Button Pressed")}>
                    <Image source={require('./footerImages/notification.png')}/>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=> Alert.alert("Settings Button Pressed")}>
                    <Image source={require('./footerImages/settings.png')}/>
                </TouchableOpacity>
            </View>
        )
    
}
const Style=StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        backgroundColor:'#FEFEFF',
        height:50,
        width:"100%",
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:20
    },
    iconsStyle:{
        color:'gray',
    }
})