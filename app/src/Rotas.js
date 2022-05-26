import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Lista from "./Lista/Lista";
import Perfil from "./Perfil/Perfil";
import ModalLista from "./Componentes/Modal/ModalLista";
import ListaCriada from "./Lista/ListasCriadas";
import EmailSenha from "./Componentes/Modal/EmailSenha";
import CodeSenha from "./Componentes/Modal/CodeSenha";
import NovaSenha from "./Componentes/Modal/NovaSenha";

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
        <Stack.Screen name="ListaCriada" component={ListaCriada} />
        <Stack.Screen name="EmailSenha" component={EmailSenha} />
        <Stack.Screen name="CodeSenha" component={CodeSenha} />
        <Stack.Screen name="NovaSenha" component={NovaSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;
