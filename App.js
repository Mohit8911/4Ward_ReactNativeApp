import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from './src/Navigation/BottomTab';
import Splash from './src/screens/Splash';
import Tutorial from './src/screens/Tutorial';
import LoginOptions from './src/screens/LoginOptions';
import colors from './src/styles/colors';
import SignupOtp from './src/screens/SignupOtp';
import SetPassword from './src/screens/SetPassword';

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
          name="SetPassword"
          component={SetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupOtp"
          component={SignupOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginOptions"
          component={LoginOptions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
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
    backgroundColor: colors.themeColor,
    padding:24,
  },
});