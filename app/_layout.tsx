import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";

export default function RootLayout() {
  useFonts({
    "Poppins-Regular": require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("../assets/fonts/poppins/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/poppins/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-Thin": require("../assets/fonts/poppins/Poppins-Thin.ttf"),
    "Poppins-Black": require("../assets/fonts/poppins/Poppins-Black.ttf"),
    "Geist-Regular": require("../assets/fonts/geist/Geist-Regular.ttf"),
    "Geist-Bold": require("../assets/fonts/geist/Geist-Bold.ttf"),
    "Geist-Thin": require("../assets/fonts/geist/Geist-Thin.ttf"),
    "Geist-Light": require("../assets/fonts/geist/Geist-Light.ttf"),
    "Geist-ExtraLight": require("../assets/fonts/geist/Geist-ExtraLight.ttf"),
    "Geist-Medium": require("../assets/fonts/geist/Geist-Medium.ttf"),
    "Geist-SemiBold": require("../assets/fonts/geist/Geist-SemiBold.ttf"),
    "Geist-ExtraBold": require("../assets/fonts/geist/Geist-ExtraBold.ttf"),
    "Geist-Black": require("../assets/fonts/geist/Geist-Black.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
