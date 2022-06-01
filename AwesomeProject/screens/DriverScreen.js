import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { useDispatch } from "react-redux";



const DriverScreen = () => {
    const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{
            width: 200,
            height: 150,
            resizeMode: 'contain'
        }}
        source={require('../assets/moviliApp.png')} 
        />

        <NavOptions/>
        
      </View>
      
      
    {/*<Text style={tw`text-red-500 p-2`}>HomeScreen</Text>*/}
    </SafeAreaView>
  );
};

export default DriverScreen

