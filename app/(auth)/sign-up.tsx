import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import FormInputField from "@/components/FormInputField";

const SignUp = () => {
  const [areFontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Geist-Regular": require("../../assets/fonts/geist/Geist-Regular.ttf"),
  });

  if (!areFontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/kl-logo.png")}
          style={{ position: "absolute", marginTop: 30 }}
        />
        <Text style={styles.text}>
          Sign
          <Text style={{ ...styles.text, color: "#6060FF" }}>Up</Text>
        </Text>
        <FormInputField />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#050505",
  },
  text: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Poppins-Bold",
  },
});
