import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SobrasCarregamentoScreen from '../Screens/SobrasCarregamentoScreen';
import SobrasSalaNobreScreen from '../Screens/SobrasSalaNobreScreen';




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
        <Stack.Screen name="SobrasCarregamento" component={SobrasCarregamentoScreen} options={{ title: 'Sobras do Carregamento' }} />
        <Stack.Screen name="SobrasSalaNobre" component={SobrasSalaNobreScreen} options={{ title: 'Sobras da Sala Nobre' }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}