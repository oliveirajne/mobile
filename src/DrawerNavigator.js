import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

// import ScreenOne from '../screens/ScreenOne';
// import ScreenTwo from '../screens/ScreenTwo';

import Login from './pages/login';
import SignUp from './pages/signup';
import Scanner from './pages/scanner';
import CreditCards from './pages/creditcards'
import CarregamentoTeste from './pages/carregamentoteste'

const DrawerNavigator = createDrawerNavigator({
    Scanner: Scanner,
    Carteira: CreditCards,
    CarregamentoTeste: CarregamentoTeste
});

export default DrawerNavigator;