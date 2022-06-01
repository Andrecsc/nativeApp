import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from '../slices/navSlice';


const HomeScreen = () => {
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

        <GooglePlacesAutocomplete
            placeholder="Origin"
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
                dispatch(setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                })
                );

                dispatch(setDestination(null));
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
        />
        <NavOptions/>
        
      </View>
      
      
    {/*<Text style={tw`text-red-500 p-2`}>HomeScreen</Text>*/}
    </SafeAreaView>
  );
};

export default HomeScreen

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0, 
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal:10,
        paddingBottom: 0,
    },  
});
