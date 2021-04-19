import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native';
import { Container } from 'native-base';
import { Link } from 'react-router-native';

export default function HomePage() {

    return (
        <Container style={styles.container}>
            <Image style={styles.image} source={require("../assets/food_icon.png")} />
            <StatusBar style="auto" />

            <TouchableOpacity >

                <Link style={styles.loginBtn} to="/login">
                    <Text style={styles.loginText}>LET'S BEGIN</Text>
                </Link>
                {/* <Text style={styles.loginText}>LET'S BEGIN</Text> */}
            </TouchableOpacity>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    loginText: {
        color: "black",
        fontWeight: "bold",
    },

    image: {
        marginBottom: 40,
        width: 80,
        height: 80,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",

    },
});
