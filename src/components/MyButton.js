import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";

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
    backgroundColor: colors.buttonColor,
    borderRadius: 8,
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
