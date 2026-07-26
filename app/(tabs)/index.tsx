// app/(tabs)/index.tsx
import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold">Home</Text>
      <Link
        className="mt-4 rounded bg-primary font-sans-bold text-white pt-4 pb-4 pl-8 pr-8"
        href="/onboarding"
      >
        Go to onboarding
      </Link>
      <Link
        className="mt-4 rounded bg-primary font-sans-bold text-white pt-4 pb-4 pl-8 pr-8"
        href="/(auth)/sign-in"
      >
        Go to SignIn
      </Link>
      <Link
        className="mt-4 rounded bg-primary font-sans-bold text-white pt-4 pb-4 pl-8 pr-8"
        href="/(auth)/sign-up"
      >
        Go to SignUp
      </Link>
    </SafeAreaView>
  );
}
