import { StyleSheet, Image } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath';

const ArrowBtn = () => {
  return (
    <Image
      source={imagePath.BackArrow}
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