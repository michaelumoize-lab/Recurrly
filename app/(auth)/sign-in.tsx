//
import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const handleGoToMain = () => {
    // Replace the current auth stack with the main tabs (root)
    router.replace("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 justify-center px-6">
        {/* Title */}
        <Text className="text-3xl font-bold text-center text-primary-600 mb-2">
          Welcome Back
        </Text>
        <Text className="text-base text-center text-gray-500 mb-8">
          Sign in to continue
        </Text>

        {/* Placeholder for sign‑in form */}
        <View className="space-y-4">
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <Text className="text-gray-400 text-sm">Email</Text>
            <Text className="text-gray-800">user@example.com</Text>
          </View>
          <View className="bg-white rounded-xl p-4 shadow-sm">
            <Text className="text-gray-400 text-sm">Password</Text>
            <Text className="text-gray-800">••••••••</Text>
          </View>
        </View>

        {/* Sign In button (placeholder) */}
        <TouchableOpacity className="bg-primary-600 py-4 rounded-xl mt-6">
          <Text className="text-white text-center font-semibold text-lg">
            Sign In
          </Text>
        </TouchableOpacity>

        {/* Link to sign-up */}
        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-500">Don&apos;t have an account? </Text>
          <Link
            href="/(auth)/sign-up"
            className="text-primary-600 font-semibold"
          >
            Create Account
          </Link>
        </View>

        {/* Separator */}
        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-400 text-sm">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Button to go to the main app (root) */}
        <TouchableOpacity
          onPress={handleGoToMain}
          className="border border-primary-600 py-4 rounded-xl"
        >
          <Text className="text-primary-600 text-center font-semibold text-lg">
            Skip to Main App
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
