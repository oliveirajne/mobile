import React, { useState, useEffect, Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, 
    StatusBar, StyleSheet, Button, SafeAreaView, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { FontAwesome5 } from '@expo/vector-icons';

import logoImg from './../../assets/logo.png';
import styles from './styles';


export default function Scanner() {
    
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const navigation = useNavigation();
    
    function navigateToSidebar() {
        navigation.navigate('Sidebar');
    };
    function navigateToCarregando(data) {
        
        //alert(`data: ${data}`);

        if (data === '142dd4') {
            
            navigation.navigate('Carregando');

        }else{
            
            alert('ID de carregador não encontrado!')
            setScanned(false);
        }
        
    };

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);


    // FUNCAO QUE PROCESSA O QRCODE APÓS SER ESCANEADO
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        //Alert.alert('Objeto escaneado!', 'Continuar?', [{text: 'SIM'}, {text: 'NÃO'}]);
        
        Alert.alert('Objeto escaneado!', 'Continuar?', [
            {text: 'SIM', onPress: () => navigateToCarregando(data)},
            {text: 'NÃO', onPress: () => setScanned(false)}
        ]);
        
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    
    return (
        
        <View style={ styles.container }>

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
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700", marginLeft: 20 }}>Scanner</Text>
                </View>
            </SafeAreaView>

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            //    style={StyleSheet.absoluteFillObject}
                style={styles.scanner}
            >
                <StatusBar barStyle="light-content" />    

                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logoImg} />
                    <Text style={styles.slogan}>Escaneie o QR code do totem</Text>
                </View>

                
                
                    
                <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
                    <Text style={styles.txtCod}>Problemas para escanear? Digite o código do totem aqui</Text>
                    <TextInput
                    placeholder="Código de 6 dígitos" 
                    placeholderTextColor="rgba(255,255,255,0.3)" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    >

                    </TextInput>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                    
                    

                
            </BarCodeScanner>

            
            


        </View>
    );
}