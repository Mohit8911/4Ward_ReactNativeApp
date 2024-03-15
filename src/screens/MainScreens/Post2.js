import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import colors from "../../styles/colors";
import ArrowBtn from "../../components/ArrowBtn";
import MyTextInput from "../../components/MyTextInput";
import imagePath from "../../constants/imagePath";
import MyButton from "../../components/MyButton";

const Post2 = ({ navigation, route }) => {
  
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
const { images,handleBackPress } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <ArrowBtn onPress={() => handleBackPress()} />
        <Text style={styles.title}>Add info</Text>
      </View>
      <View style={styles.splitContainer}>
        {images.map((image, index) => (
          <Image source={{ uri: image }} style={styles.imgStyle} key={index} />
        ))}
        <TouchableOpacity
          style={styles.imgStyle}
          onPress={() => navigation.goBack()}
        >
          <Image source={imagePath.Plus}></Image>
        </TouchableOpacity>
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
        <MyButton title="POST" onPress={() => navigation.navigate("Home")} />
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
    flexWrap: 'wrap',
    // marginTop: verticalScale(16),
  },
  imgStyle: {
    height: verticalScale(64),
    width: moderateScale(64),
    marginRight: moderateScale(16),
    marginBottom: verticalScale(8),
    borderRadius: moderateScale(6),
    resizeMode: "cover",
    backgroundColor: "#4C4C4C",
    justifyContent: "center",
    alignItems: "center",
  },
});
