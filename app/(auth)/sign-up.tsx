import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormInputField from "@/components/FormInputField";
import { useFonts } from "expo-font";
import React from "react";

const SignUp = () => {
  const [areFontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Geist-Regular": require("../../assets/fonts/geist/Geist-Regular.ttf"),
    "Geist-Light": require("../../assets/fonts/geist/Geist-Light.ttf"),
    "Geist-Thin": require("../../assets/fonts/geist/Geist-Thin.ttf"),
    "Geist-ExtraLight": require("../../assets/fonts/geist/Geist-ExtraLight.ttf"),
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
          style={{ position: "absolute", bottom: 80 }}
        />
        <Text style={styles.text}>
          Sign
          <Text style={{ ...styles.text, color: "#6060FF" }}>Up</Text>
        </Text>
        <View>
          <FormInputField
            onChange={() => ''}
            placeholder="Email"
            icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                color="white"
              />
            }
          />
          <FormInputField
            placeholder="Username"
            icon={<FontAwesome5 name="user-circle" size={30} color="white" />}
          />
          <FormInputField
            placeholder="Password"
            icon={
              <MaterialCommunityIcons
                name="shield-key-outline"
                size={30}
                color="white"
              />
            }
          />
          <FormInputField
            placeholder="Confirm Password"
            icon={
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={30}
                color="white"
              />
            }
          />
        </View>
        
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
