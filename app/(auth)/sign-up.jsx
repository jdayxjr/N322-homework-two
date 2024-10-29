import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from "react-native-paper";


export default function SignUp() {
    const [pendingVerification, setPendingVerification] = React.useState();
    const [emailAddress, setEmailAddress] = React.useState();
    const [password, setPassword] = React.useState();
    const [code, setCode] = React.useState();
    return (
        <View style={styles.container}>
            {!pendingVerification && (
                <>
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
                        onChangeText={setPassword}
                    />
                    <Button mode="outlined"
                        onPress={() => console.log("pressed")}>
                        <Text>Sign Up</Text>
                    </Button>
                </>
            )}
            {pendingVerification && (
                <>
                    <TextInput
                        autoCapitalize='none'
                        value={code}
                        placeholder='Code...'
                        keyboardType='numeric'
                        onChangeText={setCode}
                    />
                    <Button mode="outlined"
                        onPress={() => console.log("pressed")}>
                        <Text>Verify Email</Text>
                    </Button>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
    },
})