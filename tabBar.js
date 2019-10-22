import React from 'react'
import {View,TouchableOpacity,StyleSheet,Image} from 'react-native'

export  const TabBar = () =>{
   
        return(
            <View style={Style.viewStyle}>
                <TouchableOpacity >
                    <Image source={require('./footerImages/home.png')}
                    style={Style.iconsStyle}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./footerImages/search.png')}
                    style={Style.iconsStyle}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./footerImages/person.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./footerImages/notification.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
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