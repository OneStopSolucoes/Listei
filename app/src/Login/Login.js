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
  TouchableOpacity,
} from "react-native";
import Logo from "../../assets/Listei.jpeg";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hide, setHide] = useState(true);

  const navigation = useNavigation();

  const entrar = () => {
    if (email === "gabriela.muniz" && senha === "123456789") {
      navigation.navigate("Home");
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
          <View
            style={{
              flexDirection: "row",
              width: "107%",
              borderRadius: 5,
              height: 50,
              alignItems: "center",
              borderColor: "gray",
              borderWidth: 1,
              marginTop:10,
            }}
          >
            <TextInput
              style={{
                width: "80%",
                height: 50,
                padding: 8,
                fontSize: 18,
              }}
              type="email"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              borderRadius: 5,
              height: 50,
              alignItems: "center",
              borderColor: "gray",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <TextInput
              style={{
                width: "80%",
                height: 50,
                padding: 8,
                fontSize: 18,
              }}
              placeholder="senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={hide}
            />
            <TouchableOpacity
              onPress={() => setHide(!hide)}
              style={{
                width: "15%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {hide ? (
                <Ionicons name="eye" color="fff" size={25} />
              ) : (
                <Ionicons name="eye-off" color="fff" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 20,
            }}
          >
            <Button title="Login" color="#4682B4" onPress={entrar} />
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Button
                title="Cadastre-se"
                color="#4682B4"
                onPress={() => navigation.navigate("Cadastro")}
              />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilo = StyleSheet.create({
  logo: {
    width: 400,
    height: 200,
  },
});

export default Login;
