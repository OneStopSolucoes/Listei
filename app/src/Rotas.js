import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Lista from "./Lista/Lista";
import Perfil from "./Perfil/Perfil";
import ModalLista from "./Componentes/Modal/ModalLista";

const Stack = createNativeStackNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="ModalLista" component={ModalLista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;
