import React from 'react'
import {Image,StyleSheet, Dimensions} from 'react-native'

export const CoverImage = () => {
    return(
     
    <Image
    style={Styles.imgStyle}
    source={{uri:"https://tse1.mm.bing.net/th?id=OIP.epx0BwlcIz6YELEmpzHsAQHaLH&pid=Api"}}
    resizeMode='cover'/>

    )
 
}
const Styles=StyleSheet.create({
    imgStyle:{
        height:Dimensions.get("window").height / 4,
        width: "100%"
    }
})
export default CoverImage;