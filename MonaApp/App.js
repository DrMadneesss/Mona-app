// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Telas/Home';
import DetailScreen from './Telas/DetailScreen';
import Login from './Telas/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />

        {/* Tela principal de notícias */}
        <Stack.Screen name="Home" component={Home} options={{ title: 'Notícias' }} />
        
        {/* Tela de detalhes da notícia */}
        <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Detalhes da Notícia' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
