import React from "react";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';


// redux
import { Provider } from "react-redux";
import { store } from "./store";

//screens
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import DriverScreen from "./screens/DriverScreen";

//evil screen stack of evil
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";


export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <Provider store={store}>
      <KeyboardAvoidingView 
      behavior = {Platform.OS === "ios"? 'padding': 'height'} 
      style={{flex:1}}
      keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
              />
              <Stack.Screen 
              name="MapScreen" 
              component={MapScreen}
              options={{
                headerShown: false,
              }}
              />
              <Stack.Screen 
              name="DriverScreen" 
              component={DriverScreen}
              options={{
                headerShown: false,
              }}
              />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
