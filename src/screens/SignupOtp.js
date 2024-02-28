import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomTab from "../Navigation/BottomTab";
import ArrowBtn from "../components/ArrowBtn";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import TitleComp from "../components/TitleComp";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/scaling";
import { OtpInput } from "react-native-otp-entry";

const Login = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const validate = () => {
    if (!number.trim() || !password.trim()) {
      Alert.alert("All fields are required.");
      return;
    }
    if (number.trim().length != 10) {
      Alert.alert("Mobile no. should contain only 10 digits.");
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
    } else {
      navigation.navigate(BottomTab);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ArrowBtn />
      <TitleComp
        title1="Enter the 4-digit code sent to you at 875 364 8947"
        title2="Edit my mobile number"
        style2={{ color: "#32C5FF" }}
      />
      <OtpInput
        numberOfDigits={4}
        focusColor="white"
        focusStickBlinkingDuration={500}
        onTextChange={(text) => console.log(text)}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        theme={{
          containerStyle: styles.otpContainer,
          inputsContainerStyle: styles.inputsContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
        }}
      />

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text style={styles.text}>Resend code in 0:14</Text>
        <MyButton title="VERIFY" validate={validate} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: 24,
  },
  text: {
    marginBottom: moderateScale(24),
    color: "white",
    fontSize: scale(15),
    lineHeight: verticalScale(32),
  },
  otpContainer: {
    marginTop: verticalScale(32),
  },
  pinCodeContainer: {
    borderColor: "transparent",
    backgroundColor: "#4C4C4C",
    borderRadius: moderateScale(8),
    height: verticalScale(48),
    width: moderateScale(40),
    marginRight: moderateScale(16),
  },
  pinCodeText: {
    color: "white",
    fontSize: scale(14),
    lineHeight: verticalScale(17),
  },
  inputsContainer: {
    justifyContent: "flex-start",
  },
});
