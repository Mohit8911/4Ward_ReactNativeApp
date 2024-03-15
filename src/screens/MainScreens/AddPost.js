import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";
import colors from "../../styles/colors";
import { moderateScale, verticalScale } from "../../styles/scaling";
import * as ImagePicker from "expo-image-picker";

export default function AddPost({ navigation }) {
  const [images, setImages] = useState([]);

  const handleBackPress = () => {
    setImages([]);
    navigation.navigate("AddPost");
  }

  if (images.length != 0) {
    navigation.navigate("Post2", { images, handleBackPress });
  }
  console.log("hi");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const image = result.assets[0].uri;
      setImages([...images, image]);
      
    }
  };

  const openCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const image = result.assets[0].uri;
      setImages([...images, image]);
      
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select photo" onPress={pickImage} />
      <Button title="Open camera" onPress={openCamera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    paddingHorizontal: moderateScale(24),
    paddingTop: verticalScale(50),
    justifyContent: "space-around",
  },
});
