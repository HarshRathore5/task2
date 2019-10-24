import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';

export const MainView = () => {
  return (
    <View style={Style.MainViewStyle}>
      <View style={Style.childViewStyle}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={Style.imgStyle}
              source={{
                uri:
                  'https://tse4.mm.bing.net/th?id=OIP.C_aYl6j5rmlhzPBYMR34cAHaE8&pid=Api',
              }}
            />
            <View style={Style.shadowViewStyle}>
              <Image
                style={Style.prizeImageStyle}
                source={require('../footerImages/goldMedal.png')}
              />
              <Text>1st</Text>
            </View>
          </View>
          <View>
            <Image
              style={Style.imgStyle}
              source={{
                uri:
                  'https://tse4.mm.bing.net/th?id=OIP.C_aYl6j5rmlhzPBYMR34cAHaE8&pid=Api',
              }}
            />
            <View style={Style.shadowViewStyle}>
              <Image
                style={Style.prizeImageStyle}
                source={require('../footerImages/goldMedal.png')}
              />
              <Text>2nd</Text>
            </View>
          </View>
          <View>
            <Image
              style={Style.imgStyle}
              source={{
                uri:
                  'https://tse4.mm.bing.net/th?id=OIP.C_aYl6j5rmlhzPBYMR34cAHaE8&pid=Api',
              }}
            />
            <View style={Style.shadowViewStyle}>
              <Image
                style={Style.prizeImageStyle}
                source={require('../footerImages/goldMedal.png')}
              />
              <Text>3rd</Text>
            </View>
          </View>
        </View>
        <ImageBackground
        source={require('../footerImages/whiteBackImage.png')}
        style={Style.whiteBackground}>
            <Text style={Style.txtStyle}>Jungle Safari</Text>
            <Text style={Style.txtStyle2}>1st Jan 2018 - 20th Jan 2018 </Text>
        </ImageBackground>
      </View>          
    </View>
  );
};
const Style = StyleSheet.create({
  MainViewStyle: {
    // backgroundColor: 'red',
    marginTop: 10,
    alignItems: 'center',
    height: Dimensions.get('screen').height / 3,
  },
  childViewStyle: {
    backgroundColor: '#FEEED3',
    flex: 0.8,
    margin: 10,
    borderRadius: 10,
  },
  imgStyle: {
    width: Dimensions.get('window').width / 3 - 30,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
  shadowViewStyle: {
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 100,
    width: 70,
    height: 50,
    position: 'absolute',
    shadowColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    shadowOpacity: 0.4,
    elevation: 12,
    shadowOffset: {width: 0, height: 10},
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imgViewStyle: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  prizeImageStyle: {
    width: 30,
    height: 30,
  },
  overlappingView: {
    flexDirection: 'row',
    position: 'absolute',
  },
  whiteBackground: {
    width: "100%",
    height: 90,
    
    marginTop: 190,
    position: 'absolute',
  },
  txtStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 50,
    paddingTop: 10,
  },
  txtStyle2: {
    fontWeight: '200',
    paddingLeft: 50,
    paddingTop: 10,
  },
});
