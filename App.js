import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import BottomTab from "./src/Navigation/BottomTab";
import ChangePassword from "./src/screens/MainScreens/ChangePassword";
import EditProfile from "./src/screens/MainScreens/EditProfile";
import Login from "./src/screens/AuthScreens/Login";
import LoginOptions from "./src/screens/AuthScreens/LoginOptions";
import PostDetail from "./src/screens/MainScreens/PostDetail";
import SelectLocation from "./src/screens/AuthScreens/SelectLocation";
import SetPassword from "./src/screens/AuthScreens/SetPassword";
import Signup from "./src/screens/AuthScreens/Signup";
import SignupOtp from "./src/screens/AuthScreens/SignupOtp";
import Tutorial from "./src/screens/AuthScreens/Tutorial";
import colors from "./src/styles/colors";
import Post2 from "./src/screens/MainScreens/Post2";
import Routes from "./src/Navigation/Routes";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Routes/>
    // <NavigationContainer style={styles.container}>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Tutorial"
    //       component={Tutorial}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="BottomTab"
    //       component={BottomTab}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="Post2"
    //       component={Post2}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="EditProfile"
    //       component={EditProfile}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="ChangePassword"
    //       component={ChangePassword}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="PostDetail"
    //       component={PostDetail}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="SelectLocation"
    //       component={SelectLocation}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="SetPassword"
    //       component={SetPassword}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="SignupOtp"
    //       component={SignupOtp}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="LoginOptions"
    //       component={LoginOptions}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Signup"
    //       component={Signup}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
