import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet } from "react-native";
import imagePath from "../constants/imagePath";
import AddPost from "../screens/MainScreens/AddPost";
import Home from "../screens/MainScreens/Home";
import Notifications from "../screens/MainScreens/Notifications";
import Profile from "../screens/MainScreens/Profile";
import Search from "../screens/MainScreens/Search";
import { moderateScale, verticalScale } from "../styles/scaling";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const addStyle = (focused) => {
    return focused ? { tintColor: "red" } : {};
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#4C4C4C",
          height: verticalScale(70),
          borderRadius: moderateScale(8),
          borderColor: "transparent",
        },
        initialRouteName: "Home",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.Home}
              style={{ ...styles.tabBarIcon, ...addStyle(focused) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.Search}
              style={{ ...styles.tabBarIcon, ...addStyle(focused) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.Add}
              style={{ ...styles.tabBarIcon, ...addStyle(focused) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.Notifications}
              style={{ ...styles.tabBarIcon, ...addStyle(focused) }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.User}
              style={{ ...styles.tabBarIcon, ...addStyle(focused) }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarIcon: {
    // tintColor: "red",
    height: verticalScale(20),
    width: moderateScale(20),
    resizeMode: "contain",
  },
});
