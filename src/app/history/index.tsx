import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { User } from "../../@types/userType";
import { BaseScreen } from "../../components/BaseScreen";

export default function HistoryPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("@search_history");
      if (history) {
        setUsers(JSON.parse(history));
      }
    } catch (error) {
      console.error("Error loading history:", error);
    }
  };

  return (
    <BaseScreen>
      <Text style={styles.title}>Histórico de Buscas</Text>
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userLogin}>@{item.login}</Text>
            </View>
          )}
          keyExtractor={(user) => user.login}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 20,
    textAlign: "center",
  },
  container: {
    width: "100%",
    padding: 16,
  },
  userItem: {
    backgroundColor: "#1B1F28",
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  userLogin: {
    fontSize: 14,
    color: "#838b9c",
    marginTop: 4,
  },
  separator: {
    height: 8,
  },
});
