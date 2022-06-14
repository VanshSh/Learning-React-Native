import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
} from 'react-native'

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/Layout-Supplementary-Materials/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/Layout-Supplementary-Materials/logo-red.png')}
                />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
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
    logo: {
        width: 100,
        height: 100,
    },
})
export default WelcomeScreen
