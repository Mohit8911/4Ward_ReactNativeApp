import { StyleSheet,View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import TitleComp from "../components/TitleComp";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import Home from "./Home";
import ArrowBtn from "../components/ArrowBtn";
import colors from "../styles/colors";

const Signup = ({navigation}) => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

const validate = () => {
  if (!number.trim() || !email.trim() || !lName.trim() || !fName.trim()) {
    Alert.alert("All fields are required.");
    return;
  }
  if (number.trim().length != 10) {
    Alert.alert("Mobile no. should contain only 10 digits");
    return;
  }
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(validRegex)) {
    Alert.alert("Enter a valid email address!");
    return;
  }

  navigation.navigate(Home);
};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <ArrowBtn/>
      </TouchableOpacity>

      <TitleComp
        title1="Create new account"
        title2="Create an account so you can continue."
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
      <View style={{flex:1, justifyContent: "flex-end", marginBottom:15}}>
        <MyButton title="NEXT" validate={validate} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: 24,
  },
  splitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
});
