import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

interface Props {
  buttonText: string;
}
const AuthButton = ({ buttonText }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          console.log("Simulated..");
        }, 2000);
      }}
    >
      <View
        style={{
          flex: 1,
          // width: "100%",
          justifyContent: "center",
          backgroundColor: "#aaa",
        }}
      >
        {isLoading ? (
          <ActivityIndicator size={32} color="#FFFFFF" />
        ) : (
          <Text style={styles.text}>{buttonText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    backgroundColor: "#6060FF",
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
export default AuthButton;
