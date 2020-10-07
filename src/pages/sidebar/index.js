import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, ScrollView} from 'react-native';

import logoImg from './../../assets/logo.png';
import styles from './styles';

export default function Sidebar() {
    const navigation = useNavigation();

    function navigateToScanner() {
        navigation.navigate('Scanner');
    };

    function navigateToCarteira() {
        navigation.navigate('CreditCards');
    };

    function navigateToCarregamentoTeste() {
        navigation.navigate('CarregamentoTeste');
    };

    return (
        <View style={styles.container}>
            <View style={styles.viewTxtMenu}>
                <Text style={styles.txtMenu}>MENU</Text>
            </View>
            
            <ScrollView style={styles.container}>
                <View style={styles.viewOptions}>
                    <View style={styles.sidebarDivider}></View>
                    <TouchableOpacity onPress={navigateToScanner}>
                        <Text style={styles.txtMenu}>Scanner</Text>
                    </TouchableOpacity>
                    <View style={styles.sidebarDivider}></View>
                    <TouchableOpacity onPress={navigateToCarteira}>
                        <Text style={styles.txtMenu}>Carteira</Text>    
                    </TouchableOpacity>
                    <View style={styles.sidebarDivider}></View>
                    <TouchableOpacity onPress={navigateToCarregamentoTeste}>
                        <Text style={styles.txtMenu}>Carregamento Teste</Text>    
                    </TouchableOpacity>

                </View>
                
            </ScrollView>
        </View>
        
    );
}