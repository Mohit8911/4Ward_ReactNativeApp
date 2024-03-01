import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/scaling";
import imagePath from "../constants/imagePath";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.innerContainer}>
        <Image source={imagePath.ProfileUser} />
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image source={imagePath.Key} />
        <Text style={styles.text}>Change Password</Text>
      </View>
      <View style={styles.innerContainer}>
        <Image source={imagePath.Logout} style={styles.imgStyle} />
        <Text style={styles.text}>Signout</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    paddingTop: verticalScale(56),
    paddingHorizontal: moderateScale(24),
  },
  heading: {
    color: "white",
    lineHeight: verticalScale(16),
    fontSize: scale(16),
    fontWeight: "600",
  },
  innerContainer: {
    // backgroundColor: "white",
    flexDirection: "row",
    marginTop: verticalScale(32),
  },
  text: {
    color: "white",
    marginLeft: moderateScale(20),
  },
  imgStyle: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
