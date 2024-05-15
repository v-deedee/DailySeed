import React from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";

const TabBar = ({ navigationState, position, setIndex }) => {
  const inputRange = navigationState.routes.map((x, i) => i);
  return (
    <View style={styles.container}>
      {navigationState.routes.map((route, index) => {
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === index ? 1 : 0.5,
          ),
        });
        return (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => setIndex(index)}
          >
            <Animated.Text style={{ opacity, fontSize: 20 }}>
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    // borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#eee",
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabBar;
