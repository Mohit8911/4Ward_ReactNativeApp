import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from './src/Navigation/BottomTab';

const Stack = createNativeStackNavigator();

const App = () => {
  // const [active, setActive] = useState('Login');
  
  // const handleLogin = () => {
  //   console.log("login");
  //   setActive("Home");
  // };
  // const handleSignup = () => {
  //   console.log("sign");
  //   setActive("Signup");
  // };

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   {active == "Login" && <Login handleLogin={handleLogin} handleSignup={handleSignup} />}
    //   {active == "Signup" && <Signup handleNext={handleLogin} />}
    //   {active == "Home" && <Home  />}
    // </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    padding:24,
  },
});