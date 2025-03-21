import { StatusBar } from "expo-status-bar";
import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export function BaseScreen(props: PropsWithChildren) {
  return (
    <View style={styles.mainContainer}>
      {props.children}
      <StatusBar
        style="light"
        backgroundColor="#282274"
        translucent={true}
        hideTransitionAnimation="fade"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#282274",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // gap: 20,
  },
});
