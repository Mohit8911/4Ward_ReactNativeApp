import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import BottomTab from "../Navigation/BottomTab";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import TitleComp from "../components/TitleComp";
import colors from "../styles/colors";
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const SelectLocation = ({ navigation }) => {
  const [data, setData] = useState([
    { address: "Sector 55, Chandigarh", isSelected: true },
    { address: "Sector 22, Chandigarh", isSelected: false },
    { address: "Sector 48, Chandigarh", isSelected: false },
    { address: "Sector 26, Chandigarh", isSelected: false },
    { address: "Sector 40, Chandigarh", isSelected: false },
    { address: "Sector 67, Mohali", isSelected: false },
  ]);
  const [address, setAddress] = useState("");

  const validate = () => {
    if (!address.trim()) {
      Alert.alert("Please enter the address");
      return;
    } else {
      navigation.navigate('BottomTab');
    }
    };
    
    const handleTickPress = (index) => {
        const newData = [...data];
        newData[index].isSelected = !newData[index].isSelected;
        setData(newData);
    }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.titleContainer}>
        <TitleComp
          title1="Device location is off"
          title2="Turning on device location will ensure accurate road alerts."
          style={styles.titleStyle}
        />
        <MyButton
          title="TURN ON"
          textStyle={{ fontSize: scale(12) }}
          style={styles.btnStyle}
        />
      </View>
      <Text style={styles.text1}>or</Text>

      <MyTextInput
        placeholder="Enter location manually"
        setValue={setAddress}
        value={address}
      />
        <Text style={styles.text2}>Suggestions</Text>
      {/* <View> */}
        {data.map((item,index) => (
          <View style={styles.splitContainer} key={index}>
            <TouchableOpacity>
              <Text style={{ color: "white" }}>{item.address}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleTickPress(index)}>
              <Image
                source={
                  item.isSelected
                    ? require("../assets/images/ic_blue_tick.png")
                    : require("../assets/images/ic_grey_tick.png")
                }
              />
            </TouchableOpacity>
          </View>
        ))}
      {/* </View> */}

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <MyButton title="SELECT AND PROCEED" onPress={validate} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SelectLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: 24,
    paddingTop: verticalScale(52),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: verticalScale(0),
  },
  splitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    // marginBottom: 0,
    height: 32,
  },
  text1: {
    textAlign: "center",
    color: "white",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    marginVertical: verticalScale(16),
    //   padding:10
  },
  text2: {
    color: "white",
    fontSize: scale(16),
    lineHeight: verticalScale(20),
    marginTop: verticalScale(16),
  },
  btnStyle: {
    padding: moderateScale(8),
    marginLeft: moderateScale(15),
  },
  titleStyle: {
    width: "76%",
    marginVertical: 0,
  },
});
