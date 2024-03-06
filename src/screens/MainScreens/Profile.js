import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import imagePath from "../../constants/imagePath";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Image source={imagePath.ProfileUser} />

        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={() => navigation.navigate("ChangePassword")}
      >
        <Image source={imagePath.Key} />
        <Text style={styles.text}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginOptions")}
        style={styles.innerContainer}
      >
        <Image source={imagePath.Logout} style={styles.imgStyle} />
        <Text style={styles.text}>Signout</Text>
      </TouchableOpacity>
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
