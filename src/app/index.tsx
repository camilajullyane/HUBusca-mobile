import { View, Text, StyleSheet } from "react-native";
import { Navigation } from "../components/Navigation";
import { StatusBar } from "expo-status-bar";
import { BaseScreen } from "../components/BaseScreen";

export default function Home() {
  return (
    <BaseScreen>
      <View style={styles.contentView}>
        <Text style={styles.title}>HuBusca</Text>

        <Navigation />
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  contentView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 50,
    fontWeight: 700,
    color: "#fff",
    textAlignVertical: "center",
  },
});
