
import React from "react";
import { StyleSheet } from "react-native";
import Login from "../screens/AuthScreens/Login";
import LoginOptions from "../screens/AuthScreens/LoginOptions";
import SelectLocation from "../screens/AuthScreens/SelectLocation";
import SetPassword from "../screens/AuthScreens/SetPassword";
import Signup from "../screens/AuthScreens/Signup";
import SignupOtp from "../screens/AuthScreens/SignupOtp";
import Tutorial from "../screens/AuthScreens/Tutorial";
import colors from "../styles/colors";



const AuthStack = (Stack) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={{ headerShown: false }}
      />
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
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: 24,
  },
});
