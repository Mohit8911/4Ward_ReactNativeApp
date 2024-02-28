import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale } from "../styles/scaling";

const TitleComp = ({ title1, title2,style2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>{title1}</Text>
      <Text style={{ ...styles.title2, ...style2 }}>{title2}</Text>
    </View>
  );
};

export default TitleComp;

const styles = StyleSheet.create({
    container: {
    marginVertical: 16,
    },

  title1: {
    color: "#FFFFFF",
    fontSize: scale(24),
    fontWeight: "bold",
    lineHeight: verticalScale(32),
  },
  title2: {
    color: "#A6A6A6",
    fontSize: scale(15),
    // lineHeight: verticalScale(32),
  },
});
