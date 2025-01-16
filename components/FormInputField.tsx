import { View, Text, TextInput } from "react-native";
import React from "react";

interface Props {
  label: string;
  icon: string;
  placeholder: string;
}
const FormInputField = ({ label, icon, placeholder }: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <View>
        <View>{icon}</View>
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  );
};

export default FormInputField;
