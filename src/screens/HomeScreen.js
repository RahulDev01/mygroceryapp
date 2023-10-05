import {View, StyleSheet, Image, TouchableOpacity, Keyboard} from "react-native";
import { useEffect, useState } from "react";
import Header from "../common/Header";
import Home from "./tabs/Home";
import Search from "./tabs/Search";
import Notification from "./tabs/Notification";
import User from "./tabs/User";
import Wishlist from "./tabs/Wishlist";

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <Header 
      leftIcon={require('../images/menu.png')}
      rightIcon={require('../images/cart.png')}
      title={'Grocery App'}
      /> */}

      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}
        {!isKeyboardVisible && (
          <View style={styles.bottomView}>
          {/* Here we are making the bottom navigation */}
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Image
              source={
                selectedTab == 0
                  ? require("../images/home_fill.png")
                  : require("../images/home.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Image
              source={require("../images/search.png")}
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={
                selectedTab == 2
                  ? require("../images/wishlist_fill.png")
                  : require("../images/wishlist.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(3);
            }}>
            <Image
              source={
                selectedTab == 3
                  ? require("../images/noti_fill.png")
                  : require("../images/noti.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(4);
            }}>
            <Image
              source={
                selectedTab == 4
                  ? require("../images/user_fill.png")
                  : require("../images/user.png")
              }
              style={styles.bottomTabIcon}
            />
          </TouchableOpacity>
        </View>
        )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bottomTab: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});
