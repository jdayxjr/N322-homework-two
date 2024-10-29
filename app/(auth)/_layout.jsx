import { Stack, Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
export default function AuthroutesLayout() {
    const { isSignedIn } = useAuth();

    if (isSignedIn) {
        return <Redirect to="/(tabs)" />;
    }

    return <Stack />

}