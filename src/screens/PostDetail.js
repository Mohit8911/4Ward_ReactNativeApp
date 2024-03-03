import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "../styles/scaling";
import imagePath from "../constants/imagePath";
import MyButton from "../components/MyButton";

const PostDetail = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <ImageBackground
      source={item.snap}
      style={styles.imgContainer}
      resizeMode="cover"
    >
      <View style={styles.headerContainer}>
        <Image source={item.dp} style={styles.dpStyle} />
        <View style={styles.userDetails}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={imagePath.Cross} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.lowerContainer}>
          <Text style={styles.caption}>{item.caption}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <MyButton title="VIEW MAP" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    backgroundColor: "red",
    paddingTop: verticalScale(56),
    padding: moderateScale(24),
  },
  headerContainer: {
    width: "100%",
    padding: moderateScale(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  dpStyle: {
    height: verticalScale(32),
    width: moderateScale(32),
    borderRadius: moderateScale(50),
  },
  userDetails: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  name: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "bold",
  },
  address: {
    color: "white",
    fontSize: scale(13),
  },
  time: {
    fontSize: scale(13),
    marginTop: verticalScale(8),
    color: "#BFBFBF",
  },
  caption: {
    color: "white",
    lineHeight: verticalScale(20),
  },
  lowerContainer: {
    // backgroundColor: "white",
    width: "100%",
    marginBottom: verticalScale(16),
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: verticalScale(20),
  },
});
