import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';

import logoImg from './../../assets/logo.png';
import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

    function navigateToSignUp() {
        navigation.navigate('SignUp');
    };
    function navigateToScanner() {
        navigation.navigate('Scanner');
    };

    return (
        <View style={ styles.container }>
            <StatusBar barStyle="light-content" />    

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logoImg} />
                <Text style={styles.slogan}>Algum slogan aqui</Text>
            </View>

            <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                <TextInput 
                    placeholder="email" 
                    placeholderTextColor="rgba(255,255,255,0.3)" 
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} 
                />

                <TextInput 
                    placeholder="senha" 
                    secureTextEntry 
                    placeholderTextColor="rgba(255,255,255,0.3)" 
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />

                <TouchableOpacity 
                    onPress={navigateToScanner}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
            <View style={styles.viewSignUp}>
                <TouchableOpacity
                    onPress={navigateToSignUp}
                >
                    <Text style={styles.signUp}>Primeiro acesso? Clique aqui</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    );
}