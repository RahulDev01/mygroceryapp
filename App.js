import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
// import app from "./src/config/firebase";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
