import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

interface Props {
  label: string;
  icon: JSX.Element;
  placeholder: string;
}
const FormInputField = ({ label, icon, placeholder }: Props) => {
  return (
      <View style={styles.container}>
        <View style={styles.icon}>{icon}</View>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
  );
};

export default FormInputField;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center"
  },
  container: {
    position: "relative",
    width: 150,
    height: 30,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "#f2f2f2",
    padding: 5,
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
})