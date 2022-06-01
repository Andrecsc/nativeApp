import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

import tw from 'tailwind-react-native-classnames';
import { Icon, icon } from "react-native-elements";

import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux'; 
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "001",
        tittle: "Get a ride",
        image: require("../assets/carVehicle.png"),
        screen: "MapScreen",
    },
    {
        id: "002",
        tittle: "Drive",
        image: require("../assets/driver.png"),
        screen: "DriverScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)} 
            style={tw`p-10 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                        style={{ width: 120, height: 120, resizeMode: 'contain' }}
                        source={item.image}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.tittle}</Text>      
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-5`}
                        name="arrowright" color="white" type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions

//const styles = StyleSheet.create({})