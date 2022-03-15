import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from "react-native";
import Logo from "../../assets/logoListei.png";


function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = () => {
    console.log(email)
    console.log(senha)
  
    if (email === "") {
      alert("Login efetuado com sucesso")
    } else {
      alert("Usuário e senha incorreto!")
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 20,
            height: 200,
            margin: 150,
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
            onChange={e=> setEmail(e.target.value)}
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
            onChange={e=> setSenha(e.target.value)}
          />
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Button title="Login" color="#4682B4" onPress={entrar} />
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
  }
})

export default Login;
