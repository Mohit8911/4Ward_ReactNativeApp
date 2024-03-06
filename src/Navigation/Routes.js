import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isAuth = useSelector((state) => state.isAuth);
  console.log(isAuth);
  return (
    <NavigationContainer>
      {isAuth ? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  );
};

export default Routes;
