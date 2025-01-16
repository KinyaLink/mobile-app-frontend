import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  buttonText: string;
  onTap: () => void;
}
const Button = ({ buttonText, onTap }: Props) => {
  return (
    <View>
      <TouchableOpacity
        className="px-4 py-2 bg-[#6060FF] rounded-lg"
        onPress={onTap}
      >
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
