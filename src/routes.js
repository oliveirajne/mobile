import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';

const AppStack = createStackNavigator();

import Login from './pages/login';
import SignUp from './pages/signup';
import Scanner from './pages/scanner';
import CreditCards from './pages/creditcards';
import Sidebar from './pages/sidebar';
import Carregando from './pages/carregando';
import Finaliza from './pages/finaliza';
import CarregamentoTeste from './pages/carregamentoteste';

// export default createAppContainer(
//     createSwitchNavigator({
//         Main: DrawerNavigator
//     })
// );
export default function Routes() {

    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={ Login } />
                <AppStack.Screen name="SignUp" component={ SignUp } />
                <AppStack.Screen name="Scanner" component={ Scanner } />
                <AppStack.Screen name="CreditCards" component={ CreditCards } />
                <AppStack.Screen name="Sidebar" component={ Sidebar } />
                <AppStack.Screen name="Carregando" component={ Carregando } />
                <AppStack.Screen name="Finaliza" component={ Finaliza } />
                <AppStack.Screen name="CarregamentoTeste" component={ CarregamentoTeste } />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}