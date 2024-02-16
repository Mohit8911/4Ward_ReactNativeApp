import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Login from "../screens/Login";
import Home from "../screens/Home";

const MyButton = ({ title, validate, style }) => {
  return (
    <TouchableOpacity style={{ ...styles.loginBtn,...style }} onPress={validate}>
      <Text style={styles.loginBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: "#F43738",
    borderRadius: 8,
    // marginTop: 88,
    // marginBottom:0,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  loginBtnText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.88,
    lineHeight: 17,
  },
});
