import { StyleSheet, Text, View, Button } from "react-native";
import React, { useRef, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import colors from "../../styles/colors";

const ToggleVideo = () => {
  const video = useRef(null);
  const data = [
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: data[currentIndex],
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title="<<"
          onPress={() =>
            video.current.getStatusAsync().then((status) => {
              const newPosition = Math.max(status.positionMillis - 10000, 0);
              video.current.setPositionAsync(newPosition);
            })
          }
        />
        <Button
          title="<"
          disabled={currentIndex == 0 ? true : false}
          onPress={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
        />
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
        <Button
          title=">"
          disabled={currentIndex == data.length - 1 ? true : false}
          onPress={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
        />
        <Button
          title=">>"
          onPress={() =>
            video.current.getStatusAsync().then((status) => {
              const newPosition = Math.max(status.positionMillis + 10000, 0);
              video.current.setPositionAsync(newPosition);
            })
          }
        />
      </View>
    </View>
  );
};

export default ToggleVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 500,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
