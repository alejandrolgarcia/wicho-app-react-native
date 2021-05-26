import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BlogScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={{ fontSize: 25 }}>Blog Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
