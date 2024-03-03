import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "../styles/scaling";
import colors from "../styles/colors";
import ArrowBtn from "../components/ArrowBtn";
import MyTextInput from "../components/MyTextInput";
import imagePath from "../constants/imagePath";
import MyButton from "../components/MyButton";

const Post2 = ({navigation}) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <ArrowBtn onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Add info</Text>
      </View>
      <View style={styles.splitContainer}>
        <Image style={styles.imgStyle} source={imagePath.dummySnap}></Image>
        <View style={styles.imgStyle}>
          <Image source={imagePath.Plus}></Image>
        </View>
      </View>

      <MyTextInput
        placeholder="Write Description here..."
        setValue={setDescription}
              value={description}
              multiline={true}
        style={{ height: verticalScale(96), alignItems: "flex-start" }}
      />
      <MyTextInput
        placeholder="Add location"
        setValue={setLocation}
        value={location}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <MyButton title="POST" onPress={()=>navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Post2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: moderateScale(24),
    paddingTop: verticalScale(56),
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(16),
  },
  title: {
    color: "white",
    fontSize: scale(16),
    lineHeight: verticalScale(16),
    marginLeft: moderateScale(16),
    fontWeight: "600",
  },
  splitContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: verticalScale(16),
  },
  imgStyle: {
    height: verticalScale(64),
    width: moderateScale(64),
    marginRight: moderateScale(16),
    borderRadius: moderateScale(8),
    resizeMode: "cover",
      backgroundColor: "#4C4C4C",
      justifyContent: "center",
    alignItems: "center",
  },
});
