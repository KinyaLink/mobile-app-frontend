import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface Props {
  buttonText: string;
  onTap: () => void;
}
const AuthButton = ({ buttonText, onTap }: Props) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onTap}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    
  }
})
export default AuthButton;
