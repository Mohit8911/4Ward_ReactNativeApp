import React, { useRef, useState, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import colors from "../../styles/colors";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const RenderVideo = ({ item, index, shouldPlay }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart((event) => {
      //get the tap position on X
      // console.log(0);
      const touchX = event.absoluteX;
      let mid = Dimensions.get("screen").width / 2;
      console.log(touchX);
      //if tap position is before the mid point, set video back by 10s
      if (touchX < mid) {
        videoRef.current.getStatusAsync().then((status) => {
          console.log(status);
          const newPosition = Math.max(status.positionMillis - 10000, 0);
          videoRef.current.setPositionAsync(newPosition);
        });
      }
      //if tap position is before the mid point, set video forward by 10s
      else {
        videoRef.current.getStatusAsync().then((status) => {
          const newPosition = Math.min(
            status.positionMillis + 10000,
            status.durationMillis
          );
          videoRef.current.setPositionAsync(newPosition);
        });
      }
    });

  const singleTap = Gesture.Tap().onStart((event) => {
    // setShowControls(!showControls);
    // Simulate show/hide controls behavior here
    togglePlayPause();
  });

  console.log("rendered", index);
  useEffect(() => {
    if (shouldPlay) {
      setIsPlaying(true);
    }
    else setIsPlaying(false);
    // if (index === activeIndex) {
    //   setIsPlaying(true);
    //   console.log("index", index);
    // }
    // else {
    //   setIsPlaying(false);
    // }
  }, [shouldPlay]);

  //sets the current time, if video is finished, moves to the next video
  //   const handlePlaybackStatusUpdate = (status) => {
  //     setCurrentTime(status.positionMillis);
  //     if (status.didJustFinish) {
  //       playNextVideo();
  //     }
  //   };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
      <View style={styles.container}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={{
            uri: item,
          }}
          // rate={playbackSpeed}
          useNativeControls
          isMuted={isMuted}
          shouldPlay={isPlaying}
          resizeMode={ResizeMode.STRETCH}
          // onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />
      </View>
    </GestureDetector>
  );
};

export default React.memo(RenderVideo);

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: colors.themeColor,
    borderWidth: 1,
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "80%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
