import { StyleSheet, Image } from 'react-native'
import React from 'react'

const ArrowBtn = () => {
  return (
    <Image
      source={require("../assets/images/ic_back_arrow.png")}
      style={styles.backArrow}
    ></Image>
  );
}

export default ArrowBtn

const styles = StyleSheet.create({
  backArrow: {
    marginTop: 56,
    height: 18,
    width: 18,
  },
});