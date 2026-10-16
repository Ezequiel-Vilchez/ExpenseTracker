import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import NewExpenseModal from './src/screens/NewExpenseModal';
import ExpensesScreen from './src/screens/ExpensesScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}