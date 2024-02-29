import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../styles/colors";

import TutorialCard from "../components/TutorialCard";
import { moderateScale, scale, verticalScale } from "../styles/scaling";

const Tutorial = ({navigation}) => {
  const data = [1, 2, 3];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenWidth = Dimensions.get("window").width;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };
  
  const renderDotIndicators = () => {
    return data.map((item, index) => (
      <View
        key={index}
        style={
          activeIndex === index
            ? { ...styles.dotIndicator, ...styles.active }
            : styles.dotIndicator
        }
      ></View>
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <TutorialCard />}
        horizontal
        pagingEnabled={true}
        onScroll={handleScroll}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.indicators}>{renderDotIndicators()}</View>
        <TouchableOpacity onPress={() => navigation.navigate("LoginOptions")}>
          <Text style={styles.text}>GET STARTED</Text>
        </TouchableOpacity>
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
    paddingTop: moderateScale(20),
  },
  bottomContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: moderateScale(50),
    paddingHorizontal: moderateScale(20),
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dotIndicator: {
    height: verticalScale(5),
    width: moderateScale(16),
    backgroundColor: "white",
    opacity: 0.4,
    borderRadius: scale(50),
    marginRight: moderateScale(5),
  },
  text: {
    color: "white",
    fontWeight: '500',
    fontSize: scale(15),
  },
  active: {
    backgroundColor: "red",
    width: moderateScale(32),
    opacity: 1,
  },
});
