
import React from "react";
import { StyleSheet } from "react-native";
import Routes from "./src/Navigation/Routes";
import colors from "./src/styles/colors";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
    padding: 24,
  },
});
