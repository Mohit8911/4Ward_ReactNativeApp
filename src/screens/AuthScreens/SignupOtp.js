import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import ArrowBtn from "../../components/ArrowBtn";
import MyButton from "../../components/MyButton";
import TitleComp from "../../components/TitleComp";
import colors from "../../styles/colors";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";

const SignupOtp = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");
  const { number } = route.params;

  const validate = () => {
    if (!otp.trim()) {
      Alert.alert("Otp is required.");
      return;
    }
    if (otp.trim().length != 4) {
      Alert.alert("Otp should contain 4 digits.");
      return;
    } else {
      navigation.navigate("SetPassword");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ArrowBtn onPress={() => navigation.goBack()} />
      <TitleComp
        title1={`Enter the 4-digit code sent to you at ${number}`}
        title2="Edit my mobile number"
        style2={{ color: "#32C5FF" }}
      />
      <OtpInput
        numberOfDigits={4}
        focusColor="white"
        focusStickBlinkingDuration={500}
        onTextChange={(text) => setOtp(text)}
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
        <MyButton title="VERIFY" onPress={validate} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: moderateScale(24),
    paddingTop: verticalScale(56),
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
