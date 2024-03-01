import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MyTextInput from "../components/MyTextInput";
import colors from "../styles/colors";
import { scale, verticalScale } from "../styles/scaling";

const Search = ({ navigation }) => {
  const [data, setData] = useState([
    { address: "Sector 55, Chandigarh" },
    { address: "Sector 22, Chandigarh" },
    { address: "Sector 48, Chandigarh" },
    { address: "Sector 26, Chandigarh" },
    { address: "Sector 40, Chandigarh" },
    { address: "Sector 67, Mohali" },
  ]);
  const [address, setAddress] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <MyTextInput
        placeholder="Enter location manually"
        setValue={setAddress}
        value={address}
      />
      <Text style={styles.text2}>Suggestions</Text>
      {data.map((item, index) => (
        <View style={styles.splitContainer} key={index}>
          <TouchableOpacity>
            <Text style={{ color: "#C7C8C7" }}>{item.address}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </KeyboardAvoidingView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: 24,
    paddingTop: verticalScale(52),
  },
  splitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    // marginBottom: 0,
    height: 32,
  },
  text2: {
    color: "white",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    marginTop: verticalScale(16),
  },
});
