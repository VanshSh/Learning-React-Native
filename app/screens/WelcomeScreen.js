import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { SafeAreaView, Image } from 'react-native-web'

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/Layout-Supplementary-Materials/background.jpg')}
        >
            <Image
                source={require('../assets/Layout-Supplementary-Materials/')}
            />
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        marginTop: 50,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
})
export default WelcomeScreen
