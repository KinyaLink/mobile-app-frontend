import { View, StyleSheet, TextInput, TextInputProps } from "react-native";
import React from "react";

interface Props extends TextInputProps {
  icon: JSX.Element;
  placeholder: string;
}
const FormInputField = ({ icon, placeholder, ...props }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999999" 
      />
    </View>
  );
};

export default FormInputField;
const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    height: 55,
    fontFamily: "Geist-ExtraLight",
    color: "white",
    paddingLeft: 50,
    paddingRight: 10,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF30",
    backgroundColor: "#15151500",
  },
  container: {
    position: "relative",
    width: 370,
    marginBottom: 10,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 10,
    opacity: 0.5,
    zIndex: 2,
  },
});
