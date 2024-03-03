import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "../styles/scaling";
import imagePath from "../constants/imagePath";

const Card = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={item.dp} style={styles.dpStyle} />
        <View style={styles.userDetails}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <TouchableOpacity>
          <Image source={imagePath.Dots} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("PostDetail", { item })}
      >
        <Image source={item.snap} style={styles.snapStyle} />
      </TouchableOpacity>
      <View style={styles.lowerContainer}>
        <Text style={styles.caption}>{item.caption}</Text>
        <Text style={{ ...styles.address, marginTop: verticalScale(8) }}>
          {item.time}
        </Text>
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text style={styles.caption}>Comments {item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.caption}>Likes {item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={imagePath.Direction} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4C4C4C",
    width: "100%",
    // justifyContent: "center",
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    alignItems: "center",
    minHeight: verticalScale(328),
    marginBottom: verticalScale(24),
  },
  headerContainer: {
    // backgroundColor: 'red',
    width: "100%",
    padding: moderateScale(8),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  dpStyle: {
    // backgroundColor: "red",
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
    color: "#AEAEAE",
    fontSize: scale(13),
  },
  snapStyle: {
    width: moderateScale(290),
    height: verticalScale(290),
    marginHorizontal: verticalScale(16),
  },
  caption: {
    color: "white",
    lineHeight: verticalScale(20),
  },
  lowerContainer: {
    // backgroundColor: "white",
    width: "100%",
    padding: moderateScale(8),
  },
});
