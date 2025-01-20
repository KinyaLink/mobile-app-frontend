import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Link href="./(auth)/sign-up">Go to Sign Up</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: "#333"
  } 
});
