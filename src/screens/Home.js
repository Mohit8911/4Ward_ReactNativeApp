import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import colors from "../styles/colors";
import imagePath from "../constants/imagePath";
import { moderateScale, scale, verticalScale } from "../styles/scaling";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([
    {
      name: "Russell Gordon",
      address: "Sector 28D, Chandigarh",
      snap: imagePath.dummySnap,
      dp: imagePath.dummyDp,
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "1 hr ago",
      comments: "1,254",
      likes: "44,323",
    },
    {
      name: "Russell Gordon",
      address: "Sector 28D, Chandigarh",
      snap: imagePath.dummySnap,
      dp: imagePath.dummyDp,
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "1 hr ago",
      comments: "1,254",
      likes: "44,323",
    },
    {
      name: "Russell Gordon",
      address: "Sector 28D, Chandigarh",
      snap: imagePath.dummySnap,
      dp: imagePath.dummyDp,
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
      time: "1 hr ago",
      comments: "1,254",
      likes: "44,323",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>4WARD</Text>
        <Image source={imagePath.Location} />
      </View>
      <FlatList
        style={{ width: "100%", marginBottom: verticalScale(70) }}
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.themeColor,
    paddingTop: verticalScale(56),
    paddingHorizontal: moderateScale(24),
  },
  headerContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    height: verticalScale(40),
  },
  logo: {
    height: verticalScale(18),
    width: moderateScale(75),
    color: "red",
    fontWeight: "bold",
    fontSize: scale(19),
  },
});
