import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CameraRoll from "@react-native-community/cameraroll";

export default function AddPost() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      // CameraRoll.getPhotos();
      console.log({...CameraRoll})
      CameraRoll.save('file:///C:/Users/m8911/Pictures/Screenshot%202021-08-16%20153855.jpg', {  album:"1" });
      console.log(CameraRoll);
      const { edges } = await CameraRoll.getPhotos({ album: 1 });
      const photosArray = edges.map((edge) => edge.node.image.uri);
      setPhotos(photosArray);
    } catch (error) {
       
      console.log("Error getting photos: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.photoGrid}>
        {photos.map((photo, index) => (
          <TouchableOpacity key={index}>
            <Image source={{ uri: photo }} style={styles.photo} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  photo: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
