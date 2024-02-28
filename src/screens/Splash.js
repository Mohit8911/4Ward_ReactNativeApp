import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "../styles/scaling";
import colors from "../styles/colors";
import imagePath from "../constants/imagePath";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imagePath.Logo}
      ></Image>
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
