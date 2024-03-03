import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./src/Navigation/BottomTab";
import Splash from "./src/screens/Splash";
import Tutorial from "./src/screens/Tutorial";
import LoginOptions from "./src/screens/LoginOptions";
import colors from "./src/styles/colors";
import SignupOtp from "./src/screens/SignupOtp";
import SetPassword from "./src/screens/SetPassword";
import SelectLocation from "./src/screens/SelectLocation";
import Search from "./src/screens/Search";
import Profile from "./src/screens/Profile";
import Notifications from "./src/screens/Notifications";
import EditProfile from "./src/screens/EditProfile";
import ChangePassword from "./src/screens/ChangePassword";
import PostDetail from "./src/screens/PostDetail";

const Stack = createNativeStackNavigator();

const App = () => {



  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Profile"
          component={EditProfile}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
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
          name="Tutorial"
          component={Tutorial}
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
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: 24,
  },
});
