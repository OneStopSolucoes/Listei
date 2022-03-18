import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import Logo from "../../assets/logoListei.png";
import { useNavigation } from "@react-navigation/native";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  const entrar = () => {
    if (email === "gabriela.muniz" && senha === "123456789") {
      navigation.navigate("Cadastro");
    } else {
      alert("Usuário e senha incorreto!");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
          <Image source={Logo} style={estilo.logo} />
          <Text>Login</Text>
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
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Button title="Login" color="#4682B4" />
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Button title="Cadastre-se" color="#4682B4" onPress={entrar} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilo = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
});

export default Login;
