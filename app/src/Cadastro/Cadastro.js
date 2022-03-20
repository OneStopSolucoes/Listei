import React, { useState } from "react";
import { Image, Text, View, TextInput, Button } from "react-native";
import Logo from "../../assets/logoListei.png";
import { useNavigation } from "@react-navigation/native";

function Cadastro() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={Logo} />
        <Text>Cadastro</Text>

        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 200,
            marginTop: 20,
          }}
          type="nome"
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 200,
            marginTop: 20,
          }}
          type="email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 200,
            marginTop: 20,
          }}
          type="password"
          placeholder="senha"
          value={senha}
          onChangeText={setSenha}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title="Cadastre-se"
            color="#4682B4"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
}

export default Cadastro;
