import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import Settings from "../screens/Notifications";
import Notifications from "../screens/Notifications";
import { StatusBar } from "expo-status-bar";
import imagePath from "../constants/imagePath";
import { moderateScale, verticalScale } from "../styles/scaling";
import Search from "../screens/Search";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#4C4C4C",
          height: verticalScale(70),
          borderRadius: moderateScale(8),
          borderColor:'transparent'
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
          tabBarIcon: () => (
            <Image source={imagePath.Home} style={styles.tabBarIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Image source={imagePath.Search} style={styles.tabBarIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Image source={imagePath.Add} style={styles.tabBarIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Image source={imagePath.Notifications} style={styles.tabBarIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image source={imagePath.User} style={styles.tabBarIcon} />
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
    height: verticalScale(24),
    width: moderateScale(24),
    resizeMode: "contain",
  },
});
