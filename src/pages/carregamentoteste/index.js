import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, SafeAreaView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import logoImg from './../../assets/logo.png';
import styles from './styles';
import { color } from 'react-native-reanimated';
import { render } from 'react-dom';

export default function CarregamentoTeste() {

    const navigation = useNavigation();

    function navigateToSidebar() {
        navigation.navigate('Sidebar');
    };

    return (
        <View style={ styles.container }>
            <StatusBar barStyle="light-content" />    

            <SafeAreaView style={{ flexDirection: "row", 
            flexWrap: 'wrap', alignItems: "center", margin: 16 }}>
                <TouchableOpacity
                    style={{ alignItems: "flex-start",  }}
                    onPress={navigateToSidebar}
                >
                    <FontAwesome5 name="bars" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={{ alignItems: "center", justifyContent: "center", 
                position: "relative" }}>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700", marginLeft: 20 }}>Carregamento Teste</Text>
                </View>
            </SafeAreaView>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={logoImg} />
                <Text style={styles.slogan}>Algum slogan aqui</Text>
            </View>

            <View style={ styles.formContainer }>
                <Text style={styles.buttonText1}>Iniciar carga</Text>
                <Text style={styles.buttonText2}>Encerrar carga</Text>
            </View>

        </View>
    );
}