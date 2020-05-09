import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';

import logoImg from './../../assets/logo.png';
import styles from './styles';
import gifCarregando from './../../assets/charging.gif';
import { color } from 'react-native-reanimated';
import { render } from 'react-dom';

export default function Finaliza() {
    const navigation = useNavigation();

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
            <View style={ styles.viewCarregando }>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Finalizado</Text>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Você está com energia 2 GO!</Text> 
                
                <View style={{ borderWidth: 2, borderColor: "#ff671b", width: "70%", 
                marginTop: 50, marginBottom: 30, height: 100 }}>
                    <Text style={{ color: "#fff", padding: 10 }} >Valor: R$ 12,50</Text>
                    <Text style={{ color: "#fff", padding: 10 }} >Pago com: creditcard.teste</Text>

                </View>                   
            </View>

            


            <View style={styles.viewSignUp}>
                
                <TouchableOpacity
                    onPress={navigateToScanner}
                >
                    <Text style={styles.buttonText}>Início</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    );
}