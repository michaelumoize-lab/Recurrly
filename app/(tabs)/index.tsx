import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        className="mt-4 rounded bg-primary text-white pt-4 pb-4 pl-8 pr-8"
        href="/onboarding"
      >
        Go to onboarding
      </Link>
      <Link
        className="mt-4 rounded bg-primary text-white pt-4 pb-4 pl-8 pr-8"
        href="/(auth)/sign-in"
      >
        Go to SignIn
      </Link>
      <Link
        className="mt-4 rounded bg-primary text-white pt-4 pb-4 pl-8 pr-8"
        href="/(auth)/sign-up"
      >
        Go to SignUp
      </Link>
      <Link href="/subscriptions/spotify">Spotify Subscriptions</Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
      >
        Claude Max Subscriptions
      </Link>
    </View>
  );
}
