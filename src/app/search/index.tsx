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
import { UserService } from "../../service/userService";
import { User } from "../../@types/userType";
import { UserCard } from "../../components/UserCard";

export default function Search() {
  const [text, setText] = useState<string>("");
  const [userData, setUserData] = useState<User>();

  const handleTextChange = async () => {
    try {
      // console.log(text);
      const response = await UserService.getUser(text);
      setUserData(response);
      console.log(userData);
      setText("");
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
    }
  };

  return (
    <BaseScreen>
      <Text style={styles.inputLabel}>Procure por um perfil no github</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Digite um nick"
            placeholderTextColor={"#838b9c"}
            value={text}
            onChangeText={setText}
          />

          <Pressable onPress={handleTextChange} style={styles.button}>
            <SearchIcon color={"#fff"} size={25} />
          </Pressable>
        </View>
      </View>

      {userData && (
        <View style={styles.mainContainer}>
          {userData && <UserCard user={userData} />}
        </View>
      )}
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    height: 500,
    padding: 20,
    backgroundColor: "#1B1F28",
    borderRadius: 8,
    gap: 10,
  },

  inputContainer: {
    width: "100%",

    padding: 20,
  },

  inputWrapper: {
    width: "100%",
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#141C30",
    borderRadius: 4,
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    height: "100%",
    padding: 0,
    backgroundColor: "#141C30",
    color: "#fff",
    fontSize: 16,
  },

  inputLabel: {
    fontSize: 20,
    color: "#fff",
  },

  button: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
