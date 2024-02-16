import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleComp = ({ title1, title2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>{title1}</Text>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  );
};

export default TitleComp;

const styles = StyleSheet.create({
    container: {
        marginTop:16,
    },

  title1: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: 32,
  },
  title2: {
    color: "#A6A6A6",
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 32,
  },
});
