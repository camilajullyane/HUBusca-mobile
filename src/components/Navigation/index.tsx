import { View, StyleSheet, Text, Pressable } from "react-native";
import { House, Search, History } from "lucide-react-native";
import { Link } from "expo-router";

export function Navigation() {
  return (
    <View style={styles.menuContainer}>
      <Link href={"/"} asChild>
        <Pressable>
          <House color={"#fff"} size={40} />
        </Pressable>
      </Link>

      <Link href={"search"} asChild>
        <Pressable>
          <Search color={"#fff"} size={40} />
        </Pressable>
      </Link>
      <Link href={"history"} asChild>
        <Pressable>
          <History color={"#fff"} size={40} />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});
