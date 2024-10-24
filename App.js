import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  HomeScreen from './app/HomeScreen';
import BudgetScreen from './app/BudgetScreen';

const Tab = createMaterialTopTabNavigator();

// const MyTabs = () =>{
//   return(
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Budgets" component={BudgetScreen} />
//       </Tab.Navigator>
//   );
// }

export default function App() {
  return (
     <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Comptes" component={HomeScreen} />
          <Tab.Screen name="Budgets" component={BudgetScreen} />
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
