import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/scaling";
import MyButton from "../components/MyButton";

const LoginOptions = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={imagePath.Logo} style={styles.image} />
      <Text style={styles.text}>
        By clicking “Log In”, you agree with our{" "}
        <Text style={{ fontWeight: "bold" }}>Terms</Text>. Learn how we process
        your data in our <Text style={{ fontWeight: "bold" }}>Privacy </Text>
        policy.
      </Text>
      <MyButton
        title="Log In with Phone number"
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={styles.text}>or</Text>
      <MyButton
        title="Log In with Google"
        style={styles.btnStyle2}
        textStyle={{ color: "black" }}
        icon={imagePath.Google}
      />
      <MyButton
        title="Log In with Facebook"
        style={styles.btnStyle2}
        textStyle={{ color: "black" }}
        icon={imagePath.Facebook}
      />
      <MyButton
        title="Log In with Apple"
        style={styles.btnStyle2}
        textStyle={{ color: "black" }}
        icon={imagePath.Apple}
      />
      <View
        style={{
          ...styles.splitContainer,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text1}>New here?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.text2}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginOptions;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.themeColor,
    flex: 1,
    paddingHorizontal: moderateScale(2),
  },
  image: {
    resizeMode: "contain",
    height: verticalScale(200),
    width: moderateScale(200),
  },
  text: {
    color: "#9C9C9C",
    textAlign: "center",
    lineHeight: scale(20),
    marginVertical: verticalScale(16),
  },
  btnStyle: {
    width: "90%",
    marginTop: verticalScale(10),
  },
  btnStyle2: {
    width: "90%",
    marginTop: verticalScale(10),
    backgroundColor: "white",
  },
  splitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    // marginBottom: 0,
    height: 32,
  },
  text1: {
    textAlign: "center",
    color: "white",
  },
  text2: {
    color: "#32C5FF",
  },
});
