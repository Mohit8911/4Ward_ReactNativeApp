import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import colors from "../../styles/colors";
import imagePath from "../../constants/imagePath";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import Card from "../../components/Card";
import posts from "../../utils/posts";

const Home = ({ navigation }) => {
  const [data, setData] = useState(posts);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>4WARD</Text>
        <Image source={imagePath.Location} />
      </View>
      <FlatList
        style={{ width: "100%", marginBottom: verticalScale(70) }}
        data={data}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
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
