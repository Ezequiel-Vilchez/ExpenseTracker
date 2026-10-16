import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ExpensesScreen from '../screens/ExpensesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    
    <Tab.Screen 
        name="Inicio" 
        component={HomeScreen} 
    />
    
    <Tab.Screen 
        name="ListaGastos" 
        component={ExpensesScreen} 
        options={{ title: 'Mis Gastos' }} 
    />
    </Tab.Navigator>
);
}