import React, { useState, useEffect, useRef } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import ArrowBtn from "../../components/ArrowBtn";
import MyButton from "../../components/MyButton";
import TitleComp from "../../components/TitleComp";
import colors from "../../styles/colors";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import { app, auth } from "../../services/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

const SignupOtp = ({ navigation, route }) => {
  const [otp, setOtp] = useState("");
  const [count, setCount] = useState(15);
  const [result, setResult] = useState({});
  const [resendBtnVisible, setResendBtnVisible] = useState(false);

  useEffect(() => {
    sendOtp(route.params.number);
    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const recaptchaVerifier = useRef(null);

  const sendOtp = async (number) => {
    const newResult = await signInWithPhoneNumber(
      auth,
      "+91" + number,
      recaptchaVerifier.current
    );
    setResult(newResult);
    setCount(15);
  };

  const verifyCode = async (otp) => {
    try {
      const userCredential = await result.confirm(otp);
      if (userCredential) {
        navigation.navigate("SetPassword", route.params);
      }
    } catch (error) {
      Alert.alert("Wrong Code entered!");
    }
  };

  const validate = () => {
    if (!otp.trim()) {
      Alert.alert("Otp is required.");
      return;
    }
    if (otp.trim().length != 6) {
      Alert.alert("Otp should contain 4 digits.");
      return;
    } else {
      verifyCode(otp);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ArrowBtn onPress={() => navigation.goBack()} />
      <TitleComp
        title1={`Enter the 6-digit code sent to you at ${route.params.number}`}
        title2="Edit my mobile number"
        style2={{ color: "#32C5FF" }}
      />
      <OtpInput
        numberOfDigits={6}
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
        {count < 0 ? (
          <TouchableOpacity
            onPress={() => sendOtp(route.params.number)}
          >
            <Text style={styles.text}>Resend Otp</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.text}>Resend code in 0:{count}</Text>
        )}
        <MyButton title="VERIFY" onPress={validate} />
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />
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
    marginRight: moderateScale(13),
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
