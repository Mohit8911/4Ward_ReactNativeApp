import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TitleComp from "../components/TitleComp";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import Signup from "./Signup";
import Home from "./Home";
import ArrowBtn from "../components/ArrowBtn";
import colors from "../styles/colors";
import BottomTab from "../Navigation/BottomTab";
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const Login = ({ navigation }) => {
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
      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headingContainer}>
        <ArrowBtn onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Change Password</Text>
      </View>
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
        <MyButton title="SAVE" onPress={validate} />
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
  
  headingContainer: {
    flexDirection: "row",
      alignItems: "center",
      marginBottom: moderateScale(32),
  },
  title: {
    color: "white",
    fontSize: scale(16),
    lineHeight: verticalScale(16),
    marginLeft: moderateScale(16),
    fontWeight: "600",
  },
});
