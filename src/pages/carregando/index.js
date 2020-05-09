import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Image, Text, TextInput, TouchableOpacity, 
    KeyboardAvoidingView, StatusBar} from 'react-native';

import logoImg from './../../assets/logo.png';
import styles from './styles';
import gifCarregando from './../../assets/charging.gif';
import { color } from 'react-native-reanimated';
import { render } from 'react-dom';

export default function Login() {
    const navigation = useNavigation();

    function navigateToFinaliza() {
        navigation.navigate('Finaliza');
    };

    let valor = 0;
    
    function simulaValor() {

        setTimeout(function(){
 
            
            valor = valor + 0,5;
            alert('teste');

        }, 500);

        return valor;
        
    };

    return (
        <View style={ styles.container }>
            <StatusBar barStyle="light-content" />    

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logoImg} />
                <Text style={styles.slogan}>Algum slogan aqui</Text>
            </View>
            <View style={ styles.viewCarregando }>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>Carregando</Text>
                <Image resizeMode="contain" style={ {width:330} } source={gifCarregando} />
            </View>

            {/* <View>
                <Text style={{ color: "#fff", fontSize: 20, 
                fontWeight: "700", marginHorizontal: 30 }}>
                    Valor: {valor} 
                </Text>
            </View> */}

            <View style={styles.viewSignUp}>
                
                <TouchableOpacity
                    onPress={navigateToFinaliza}
                >
                    <Text style={styles.buttonText}>Encerrar</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    );
}