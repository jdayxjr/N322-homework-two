import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import React from 'react'
import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';

export default function SignIn() {
    const { SignIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();
    const [emailAddress, setEmailAddress] = React.useState();
    const [password, setPassword] = React.useState();

    const onSignIn = React.useCallback(async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password: password,

            });

            if (signInAttempt === "complete") {
                await setActive({
                    session: signInAttempt.createdSessionId,
                });
                router.push("/(tabs)");
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
            }

        } catch (err) {
            console.error("Sign in err", err + ' ', JSON.stringify(err, null, 2));
        }
    }, [isLoaded, emailAddress, password]);
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    autoCapitalize='none'
                    value={emailAddress}
                    keyboardType='emal-address'
                    placeholder='Email address'
                    onChangeText={setEmailAddress}
                />
                <TextInput
                    autoCapitalize='none'
                    value={password}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <Button mode="outlined"
                    onPress={onSignIn}>
                    <Text>Sign Up</Text>
                </Button>
            </View>
            <View>
                <Text>Don't have an account?</Text>
                <Link href="/sign-up">
                    <Text>Sign up</Text>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
    },
})