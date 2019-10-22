import React from 'react'
import {View,StyleSheet,SafeAreaView,Text} from 'react-native'
import CollectionView from './collectionView'
import {BackButton} from './backButton'
import Roads from './dataFeed'
import CoverImage from './coverImage'
import Gallery from './floatButtons';



export default class App extends React.Component{
  render(){
    return(
     
      
      <React.Fragment>
                  <CoverImage/>

        <Roads/>
        <Gallery/>
        </React.Fragment> 
   
      //   // {/* <BackButton/>
      //   // <Text style={styles.textStyle}>
      //     {/* Gallery */}
      //   {/* </Text> */}
      // {/* //  <CollectionView/> */} */}
    
       
     
    );
  }
}
// const styles = StyleSheet.create({
//   appThemeStyle:{
//     height:80,
//     width:"100%",
//     backgroundColor:'#FB9701',
//     alignItems:'center'
//   },
//   textStyle:{
//     fontWeight:'bold',
//     color:'ghostwhite',
//     fontSize:28,
//     marginTop:40
//   }
// })