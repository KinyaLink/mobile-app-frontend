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
      <View>
        {isLoading ? (
          <ActivityIndicator size={28} color="#FFFFFF" />
        ) : (
          <Text style={styles.text}>{buttonText}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 250,
    backgroundColor: "#6060FF",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
export default AuthButton;
