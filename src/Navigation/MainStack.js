import { View, Text } from "react-native";
import React from "react";
import BottomTab from "./BottomTab";
import Post2 from "../screens/MainScreens/Post2";
import EditProfile from "../screens/MainScreens/EditProfile";
import ChangePassword from "../screens/MainScreens/ChangePassword";
import PostDetail from "../screens/MainScreens/PostDetail";

const MainStack = (Stack) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Post2" component={Post2} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
  );
};

export default MainStack;
