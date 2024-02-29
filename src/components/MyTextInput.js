import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const MyTextInput = ({
  placeholder,
  setValue,
  value,
  style,
  isPasswordSecure,
  setIsPasswordSecure,
  ...rest
}) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput
        style={{ ...styles.textInput }}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderColor}
        value={value}
        secureTextEntry={isPasswordSecure}
        {...rest}
        onChangeText={(num) => setValue(num)}
      ></TextInput>
      {placeholder == "Password" || placeholder == "Confirm password" ? (
        <TouchableOpacity
          onPress={() => setIsPasswordSecure(!isPasswordSecure)}
        >
          <Text style={{ color: colors.placeholderColor }}>
            {isPasswordSecure ? "Show" : "Hide"}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(16),
    borderRadius: scale(8),
    backgroundColor: "#4C4C4C",
    padding: moderateScale(10),
  },

  textInput: {
    color: "white",
    flex: 1,
  },
});
