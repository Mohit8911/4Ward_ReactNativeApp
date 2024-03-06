import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import colors from "../../styles/colors";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import imagePath from "../../constants/imagePath";

const Notifications = () => {
  const [notications, setNotications] = useState([
    { dp: imagePath.dummyDp, name: "Russell Gordon", time: 20 },
    { dp: imagePath.dummyDp, name: "Sara", time: 20 },
    { dp: imagePath.dummyDp, name: "Raph", time: 20 },
    { dp: imagePath.dummyDp, name: "Syker John", time: 20 },
  ]);

  const renderNotifications = (notication) => {
    return (
      <View style={styles.headerContainer}>
        <Image source={notication.dp} style={styles.dpStyle} />
        <View style={styles.userDetails}>
          <Text style={styles.name}>
            <Text style={{ color: "red" }}>{notication.name}</Text> added a new
            post.
          </Text>
          <Text style={styles.address}>{notication.time} min ago</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <FlatList
        style={{ width: "100%", marginBottom: verticalScale(70) }}
        data={notications}
        renderItem={({ item }) => renderNotifications(item)}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    paddingTop: verticalScale(56),
    paddingHorizontal: moderateScale(24),
  },
  heading: {
    color: "white",
    lineHeight: verticalScale(16),
    fontSize: scale(16),
    fontWeight: "600",
    marginVertical: verticalScale(8),
  },
  headerContainer: {
    // backgroundColor: 'red',
    width: "100%",
    height: verticalScale(59),
    marginTop: verticalScale(16),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  dpStyle: {
    // backgroundColor: "red",
    height: verticalScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(50),
  },
  userDetails: {
    flex: 1,
    marginLeft: moderateScale(16),
    borderBottomColor: "#979797",
    borderBottomWidth: 0.6,
    paddingBottom: verticalScale(16),
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
});
