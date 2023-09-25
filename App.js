import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
// import app from "./src/config/firebase";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar animated />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
