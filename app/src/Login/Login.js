import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Logo from "../../assets/Listei.png";
import CampoLogin from "../Componentes/CampoLogin/CampoLogin";
import EsquecerSenha from "../Componentes/EsquecerSenha/EsquecerSenha";

function Login() {
  return (
    <View style={estilo.principal}>
      <Image source={Logo} style={estilo.logo} />
      <Text>Login</Text>
      <CampoLogin />
      <EsquecerSenha />
    </View>
  );
}

const estilo = StyleSheet.create({
  logo: {
    width: 400,
    height: 200,
  },
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Login;
