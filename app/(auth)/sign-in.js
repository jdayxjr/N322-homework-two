import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text>sign-in</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
    },
})