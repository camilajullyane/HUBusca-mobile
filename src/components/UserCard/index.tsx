import { View, StyleSheet, Text, Image } from "react-native";
import { User } from "../../@types/userType";
import { MapPin } from "lucide-react-native";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: user.avatar_url,
          }}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userLogin}>{user.login}</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <MapPin color={"#838b9c"} />
          <Text style={{ textAlignVertical: "center", color: "#838b9c" }}>
            {user.location}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    alignItems: "center",
    paddingVertical: 20,
    gap: 20,
  },

  userContainer: {
    width: 200,
    height: 200,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    resizeMode: "cover",
  },

  userInfo: {
    alignItems: "center",
    gap: 8,
  },

  userName: {
    fontSize: 30,
    fontWeight: 600,
    color: "#fff",
  },

  userLogin: {
    fontSize: 15,
    color: "#838b9c",
  },
});
