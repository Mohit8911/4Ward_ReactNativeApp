import React, { useState, useRef } from "react";
import { Alert, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import ArrowBtn from "../../components/ArrowBtn";
import MyButton from "../../components/MyButton";
import MyTextInput from "../../components/MyTextInput";
import TitleComp from "../../components/TitleComp";
import colors from "../../styles/colors";
import { moderateScale, verticalScale } from "../../styles/scaling";
import { signInWithPhoneNumber } from "firebase/auth";
import { app, auth, db } from "../../services/firebaseConfig";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { doc, getDoc } from "firebase/firestore";

const Signup = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const recaptchaVerifier = useRef(null);

  const handleSignup = async (number) => {
    const docRef = doc(db, "users", number);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      Alert.alert("Phone Number already exists");
      return;
    }
    navigation.navigate("SignupOtp", { fName, lName, email, number });
  };

  const validate = () => {
    if (!number.trim() || !email.trim() || !lName.trim() || !fName.trim()) {
      Alert.alert("All fields are required.");
      return;
    }
    if (number.trim().length != 10) {
      Alert.alert("Mobile no. should contain only 10 digits");
      return;
    }
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      Alert.alert("Enter a valid email address!");
      return;
    }
    handleSignup(number);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ArrowBtn onPress={() => navigation.goBack()} />

      <TitleComp
        title1="Create new account"
        title2="Create an account so you can continue."
        style={{ marginTop: 16 }}
      />
      <View style={styles.splitContainer}>
        <MyTextInput
          placeholder="First Name"
          setValue={setFName}
          value={fName}
          style={{ width: "48%" }}
        />
        <MyTextInput
          placeholder="Last Name"
          setValue={setLName}
          value={lName}
          style={{ width: "48%" }}
        />
      </View>
      <MyTextInput placeholder="Email" setValue={setEmail} value={email} />
      <MyTextInput
        placeholder="Mobile Number"
        setValue={setNumber}
        value={number}
        keyboardType={"number-pad"}
      />
      {/* <View id="recaptcha"></View> */}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <MyButton title="NEXT" onPress={validate} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;

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
    // marginTop: verticalScale(16),
  },
});
