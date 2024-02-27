import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const TutorialCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image source={require("../assets/images/ic_1.png")}></Image>
      <View style={styles.innerTextContainer}>
        <Text style={styles.heading}>Hendrerit vulputate sem</Text>
        <Text style={styles.para}>
          Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam
          aenean.
        </Text>
      </View>
    </View>
  );
}

export default TutorialCard

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#4C4C4C",
    marginHorizontal: moderateScale(12),
    height: verticalScale(550),
    width: moderateScale(328),
    borderRadius: scale(16),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  innerTextContainer: {
    justifyContent: "space-between",
    // height: verticalScale(80),
    width: moderateScale(280),
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: scale(22),
    lineHeight: verticalScale(32),
  },
  para: {
    color: "#999999",
    textAlign: "center",
    lineHeight: verticalScale(22),
  },
});