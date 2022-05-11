import React, { useState } from "react";
import { Image, Text, View, TextInput, Button, StyleSheet } from "react-native";
import Logo from "../../assets/Listei.png";
import { useNavigation } from "@react-navigation/native";
import CampoCadastro from "../Componentes/CampoCadastro/CampoCadastro";

function Cadastro() {
  return (
    <View style={styles.principal}>
      <Image source={Logo} style={styles.logo} />
      <Text>Cadastro</Text>
      <CampoCadastro/>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default Cadastro;
