import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import ArrowBtn from "../../components/ArrowBtn";
import MyButton from "../../components/MyButton";
import MyTextInput from "../../components/MyTextInput";
import TitleComp from "../../components/TitleComp";
import actions from "../../redux/actions";
import colors from "../../styles/colors";
import { moderateScale, verticalScale } from "../../styles/scaling";
import { doc, setDoc } from "firebase/firestore";

const Login = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCPasswordSecure, setIsCPasswordSecure] = useState(true);




  const validate = () => {
    if (!confirmPassword.trim() || !password.trim()) {
      Alert.alert("All fields are required.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Password must be at least 8 characters!");
      return;
    } else if (!password.match(/[A-Z]/)) {
      Alert.alert("Password must contain at least one capital letter!");
      return;
    } else if (!password.match(/[0-9]/)) {
      Alert.alert("Password must contain at least one numeric character!");
      return;
    } else if (!password.match(/[!@#/$%^&*-]/)) {
      Alert.alert("Password must contain at least one special character!");
      return;
    } else if (password !== confirmPassword) {
      Alert.alert("Confirm Password does not match with Password");
      return;
    } else {
      navigation.navigate("SelectLocation", { ...route.params, password });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ArrowBtn onPress={() => navigation.goBack()} />
      <TitleComp
        title1="Set password"
        title2="Create secure and unique password."
      />
      <MyTextInput
        placeholder="Password"
        setValue={setPassword}
        value={password}
        isPasswordSecure={isPasswordSecure}
        setIsPasswordSecure={setIsPasswordSecure}
      />
      <MyTextInput
        placeholder="Confirm password"
        setValue={setConfirmPassword}
        value={confirmPassword}
        isPasswordSecure={isCPasswordSecure}
        setIsPasswordSecure={setIsCPasswordSecure}
      />

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <MyButton title="GET STARTED" onPress={validate} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: moderateScale(24),
    paddingTop: verticalScale(56),
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
