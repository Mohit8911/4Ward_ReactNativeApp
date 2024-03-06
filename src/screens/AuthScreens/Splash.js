import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { moderateScale, verticalScale } from "../../styles/scaling";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import Tutorial from "./Tutorial";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate(Tutorial), 1000);
    console.log("rendered");
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imagePath.Logo}></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.themeColor,
    flex: 1,
  },
  image: {
    resizeMode: "contain",
    height: verticalScale(200),
    width: moderateScale(200),
  },
});
