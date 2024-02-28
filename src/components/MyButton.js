import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { moderateScale } from "../styles/scaling";

const MyButton = ({ title, validate, style, color,icon }) => {
  return (
    <TouchableOpacity style={{ ...styles.loginBtn, ...style }} onPress={validate}>
      {icon && <Image source={icon} style={styles.icon}></Image>}
      <Text style={{ ...styles.loginBtnText,color }}>{title}</Text>
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
  icon: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft:moderateScale(15),
  }
});
