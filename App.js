import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/AppNavigator";
// import app from "./src/config/firebase";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
