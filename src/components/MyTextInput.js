import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";



const MyTextInput = ({ placeholder, setValue, value,style,isPasswordSecure,setIsPasswordSecure, ...rest }) => {
  return (
    <View style={{...styles.container,...style}}>
      <TextInput
        style={{...styles.textInput }}
        placeholder={placeholder}
        placeholderTextColor={"rgba(255,255,255,0.5)"}
        value={value}
        secureTextEntry={isPasswordSecure}
        {...rest}
        onChangeText={(num) => setValue(num)}
      ></TextInput>
      {placeholder == "Password" ? (
        <TouchableOpacity onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
          <Text style={{ color: "rgba(255,255,255,0.5)" }}>Show</Text>
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
    justifyContent:'space-between',
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: "#4C4C4C",
    padding: 10,
  },

  textInput: {
    color: "white",
    flex:1,
  },
});
