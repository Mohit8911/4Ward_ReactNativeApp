import { StyleSheet, Text, View,ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TitleComp from "../components/TitleComp";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import Signup from './Signup';
import Home from "./Home";

const Login = ({navigation}) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const validate = () => {
    if (!number.trim() || !password.trim()) {
      Alert.alert("All fields are required.");
      return;
    }
    if (number.trim().length != 10) {
      Alert.alert(
        "Mobile no. should contain only 10 digits.",
      );
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
    }
    else {
      navigation.navigate(Home);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require("../assets/images/ic_back_arrow.png")}
        style={styles.backArrow}
      ></Image>
      <TitleComp
        title1="Welcome back!"
        title2="We are happy to see. You can login to continue."
      />
      <MyTextInput
        placeholder="Mobile Number"
        setValue={setNumber}
        value={number}
        keyboardType={"number-pad"}
      />
      <MyTextInput
        placeholder="Password"
        setValue={setPassword}
        value={password}
        isPasswordSecure={isPasswordSecure}
        setIsPasswordSecure={setIsPasswordSecure}
      />
      <View style={styles.splitContainer}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>Use OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "#32C5FF" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex:1, justifyContent:'flex-end'}}>
        <MyButton title="LOGIN" validate={validate} />
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
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    padding: 24,
  },
  backArrow: {
    marginTop: 56,
    height: 12,
    width: 13,
  },
  splitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 16,
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
