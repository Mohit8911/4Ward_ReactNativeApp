import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ArrowBtn from "../components/ArrowBtn";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const EditProfile = ({ navigation }) => {
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
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      Alert.alert("Enter a valid email address!");
      return;
    }

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headingContainer}>
        <ArrowBtn onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={{ marginVertical: verticalScale(30) }}>
        <Image source={imagePath.dummyDp} style={styles.picStyle} />
        <Image source={imagePath.Edit} style={styles.editIconStyle} />
      </View>
      <View style={styles.splitContainer}>
        <MyTextInput
          placeholder="First Name"
          setValue={setFName}
          value={fName}
          style={{ width: "48%", marginTop: verticalScale(10) }}
        />
        <MyTextInput
          placeholder="Last Name"
          setValue={setLName}
          value={lName}
          style={{ width: "48%", marginTop: verticalScale(10) }}
        />
      </View>
      <MyTextInput
        placeholder="Email"
        setValue={setEmail}
        value={email}
        style={{ marginTop: verticalScale(10) }}
      />
      <MyTextInput
        placeholder="Mobile Number"
        setValue={setNumber}
        value={number}
        keyboardType={"number-pad"}
        style={{ marginTop: verticalScale(10) }}
      />
      <View style={styles.btnContainer}>
        <MyButton title="SAVE CHANGES" onPress={validate} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    paddingHorizontal: moderateScale(24),
    paddingTop: verticalScale(50),
  },
  splitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: scale(16),
    lineHeight: verticalScale(16),
    marginLeft: moderateScale(16),
    fontWeight: "600",
  },
  picStyle: {
    height: verticalScale(92),
    width: moderateScale(100),
    alignSelf: "center",
    borderRadius: moderateScale(500),
    resizeMode: "cover",
  },
  editIconStyle: {
    height: verticalScale(20),
    width: moderateScale(20),
    position: "absolute",
    bottom: 0,
    right: moderateScale(110),
    resizeMode: "contain",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: verticalScale(10),
  },
});
