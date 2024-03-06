
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const AUTHDATA = 0;
  return (
    <NavigationContainer>
              {AUTHDATA ? MainStack(Stack): AuthStack(Stack) }
    </NavigationContainer>
  );
};

export default Routes;
