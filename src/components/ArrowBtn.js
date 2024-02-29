import { StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath';
import { moderateScale, verticalScale } from '../styles/scaling';

const ArrowBtn = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Image source={imagePath.BackArrow} style={styles.backArrow}></Image>
    </TouchableOpacity>
  );
}

export default ArrowBtn

const styles = StyleSheet.create({
  backArrow: {
    marginTop: verticalScale(56),
    height: verticalScale(18),
    width: moderateScale(18),
  },
});