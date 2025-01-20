import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/images/kl-logo.png")}
        />
        <Text>
          Sign<Text>Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
