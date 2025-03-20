import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  Pressable,
} from "react-native";
import { BaseScreen } from "../../components/BaseScreen";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react-native";

export default function Search() {
  const [text, setText] = useState<string>("");

  const handleTextChange = () => {
    console.log(text);
    setText("");
  };

  return (
    <BaseScreen>
      <View style={styles.mainContainer}>
        <Text style={styles.inputLabel}>Procure por um perfil</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite algo"
            value={text}
            onChangeText={setText}
          ></TextInput>

          <Pressable onPress={handleTextChange}>
            <View style={styles.button}>
              <SearchIcon color={"#000"} />
            </View>
          </Pressable>
        </View>
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "80%",
    height: 400,
    padding: 20,
    backgroundColor: "#52525C",
    borderRadius: 8,
    gap: 10,
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#90A1B9",
    color: "#fff",
    borderRadius: 4,
  },

  inputLabel: {
    fontSize: 20,
    color: "#fff",
  },

  button: {
    width: "100%",
    height: 40,
    padding: 8,
    // height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
