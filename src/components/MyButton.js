import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const MyButton = ({ title, style, textStyle,icon, ...rest }) => {
  return (
    <TouchableOpacity style={{ ...styles.loginBtn, ...style }}  {...rest} >
      {icon && <Image source={icon} style={styles.icon}></Image>}
      <Text style={{ ...styles.loginBtnText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: colors.buttonColor,
    borderRadius: scale(8),
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(15),
  },
  loginBtnText: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.88,
    lineHeight: verticalScale(17),
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-start',
    marginLeft:moderateScale(15),
  }
});
