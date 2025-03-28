import { Stack } from "expo-router";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Stack/>
        {/*<Stack.Screen name="index" options={{ headerShown: false }} />*/}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
