import { FlatList, Dimensions } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import RenderVideo from "./RenderVideo";
import { useState } from "react";

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mp4/.m3u8",
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const screenWidth = Dimensions.get("window").height;
    const newIndex = Math.round(scrollPosition / screenWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      console.log(newIndex);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={data}
        pagingEnabled
        onScroll={handleScroll}
        renderItem={({ item,index }) => <RenderVideo item={item} index={index} shouldPlay={activeIndex==index} />}
        keyExtractor={(item, index) => index}
      />
    </GestureHandlerRootView>
  );
};

export default Reels;
