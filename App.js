import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  HomeScreen from './app/HomeScreen';
import BudgetScreen from './app/BudgetScreen';
import CategoriesScreen from './app/CategoriesScreen';
import SettingsScreen from './app/SettingsScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
     <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Comptes" component={HomeScreen} />
          <Tab.Screen name="Budgets" component={BudgetScreen} />
          <Tab.Screen name="Categories" component={CategoriesScreen} />
          <Tab.Screen name="Paramètres" component={SettingsScreen} />
        </Tab.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
