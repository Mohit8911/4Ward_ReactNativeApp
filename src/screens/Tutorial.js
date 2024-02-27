import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import colors from "../styles/colors";

import TutorialCard from "../components/TutorialCard";
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const Tutorial = () => {
  const data = [1, 2, 3];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <TutorialCard />}
        horizontal
        pagingEnabled={true}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",

          //   marginTop:verticalScale(20),
        }}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.indicators}>
          <View style={styles.dotIndicator}></View>
          <View style={styles.dotIndicator}></View>
          <View style={styles.dotIndicator}></View>
        </View>
        <Text style={styles.text}>GET STARTED</Text>
      </View>
    </View>
  );
};

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
      marginBottom:moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dotIndicator: {
    height: verticalScale(5),
    width: moderateScale(20),
    backgroundColor: "white",
    opacity: 0.4,
    borderRadius: scale(50),
    marginRight: moderateScale(5),
  },
  text: {
    color: "white",
  },
});
