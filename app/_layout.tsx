import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    "Poppins-Regular": require("./assets/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/poppins/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/poppins/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./assets/poppins/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("./assets/poppins/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraBold": require("./assets/poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("./assets/poppins/Poppins-Medium.ttf"),
    "Poppins-Thin": require("./assets/poppins/Poppins-Thin.ttf"),
    "Poppins-Black": require("./assets/poppins/Poppins-Black.ttf"),
    "Geist-Regular": require("./assets/geist/Geist-Regular.ttf"),
    "Geist-Bold": require("./assets/geist/Geist-Bold.ttf"),
    "Geist-Thin": require("./assets/geist/Geist-Thin.ttf"),
    "Geist-Light": require("./assets/geist/Geist-Light.ttf"),
    "Geist-ExtraLight": require("./assets/geist/Geist-ExtraLight.ttf"),
    "Geist-Medium": require("./assets/geist/Geist-Medium.ttf"),
    "Geist-SemiBold": require("./assets/geist/Geist-SemiBold.ttf"),
    "Geist-ExtraBold": require("./assets/geist/Geist-ExtraBold.ttf"),
    "Geist-Black": require("./assets/geist/Geist-Black.ttf"),
  })
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
