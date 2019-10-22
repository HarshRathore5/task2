import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
export const Gallery=()=>{
    return(
        <View style={Styles.viewStyle}>
        <TouchableOpacity style={Styles.shadowView}>
            <Text style={Styles.txtStyle}>
                View Gallery
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.addButtonStyle}>
            <Text style={Styles.addTxtStyle}>
                +
            </Text>
        </TouchableOpacity>
        

        </View>
    )
}
export default Gallery;

const Styles = StyleSheet.create({
    shadowView:{
        width:150,
        height:60,
        shadowColor:'gray',
        borderRadius:5,
        backgroundColor:'white',
        shadowOpacity:0.4,
        elevation:12,
        shadowOffset:{width: 0,height: 10},
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center',
      
    },
    addButtonStyle:{
        width:50,
        height:50,
        shadowColor:'gray',
        borderRadius:10,
        backgroundColor:'#FDBD23',
        shadowOpacity:0.4,
        elevation:12,
        shadowOffset:{width: 0,height: 10},
        marginRight:20,
        justifyContent:'center',
        alignItems:'center'
    },
    addTxtStyle:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    txtStyle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#FDBD23'
    },
    viewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        marginBottom:30
    }
})