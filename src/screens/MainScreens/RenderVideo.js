import React, { useRef, useState, useEffect, useCallback } from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import { ResizeMode, Video } from "expo-av";
import colors from "../../styles/colors";
import Slider from "@react-native-community/slider";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import imagePath from "../../constants/imagePath";
import { moderateScale, verticalScale } from "../../styles/scaling";

const RenderVideo = ({ item, index, shouldPlay }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState({});


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
  useFocusEffect(
    useCallback(
      () => {
        if (shouldPlay) {
      setIsPlaying(true);
    }
    else setIsPlaying(false);

    return () => {
      setIsPlaying(false);
    }
      },
      [shouldPlay]
    )
    );

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
          isMuted={isMuted}
          shouldPlay={isPlaying}
          resizeMode={ResizeMode.STRETCH}
          onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
        <Slider
          style={{
            width: "100%",
            height: 40,
            position: "absolute",
            bottom: 64,
          }}
          thumbTintColor="red"
          minimumValue={0}
          maximumValue={status.durationMillis}
          value={status.positionMillis}
          onValueChange={(value) => {
            videoRef.current.setPositionAsync(value);
          }}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#000000"
        />
        {!isPlaying && <Image
          source={imagePath.PauseIndicator}
          style={styles.pauseIndicator}
          resizeMode="contain"
        />}
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
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pauseIndicator: {
    position: "absolute",
    alignSelf: "center",
    height: verticalScale(40),
    width: moderateScale(40),
    bottom: (Dimensions.get("screen").height) / 2,
    
  },
});
