import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Logo from "../../assets/logoListei.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
          <Image source={Logo} />
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
          />
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Button title="Login" color="#4682B4" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
