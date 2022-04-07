import React, { useState } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function CampoLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [hide, setHide] = useState(true);

  const navigation = useNavigation();

  const entrar = () => {
    if (email === "gabriela.muniz" && senha === "123456789") {
      navigation.navigate("Perfil", {
        paramKey: email
      });
      console.log(paramKey)
    } else {
      alert("Usuário e senha incorreto!");
    }
  };
  return (
    <View>
      <View style={styles.email}>
        <TextInput
          style={styles.inputEmail}
          type="email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.senha}>
        <TextInput
          style={styles.inputSenha}
          placeholder="senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={hide}
        />
        <TouchableOpacity onPress={() => setHide(!hide)} style={styles.olho}>
          {hide ? (
            <Ionicons name="eye" color="fff" size={25} />
          ) : (
            <Ionicons name="eye-off" color="fff" size={25} />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <Button title="Login" color="#4682B4" onPress={() =>
            navigation.navigate('Home', {
              paramKey: email,
            })
          } />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Cadastre-se"
          color="#4682B4"
          onPress={() => navigation.navigate("Cadastro")}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  email: {
    flexDirection: "row",
    width: "107%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
  },
  senha: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
  },
  inputEmail: {
    width: "80%",
    height: 50,
    padding: 8,
    fontSize: 18,
  },
  inputSenha: {
    width: "80%",
    height: 50,
    padding: 8,
    fontSize: 18,
  },
  olho: {
    width: "15%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    marginTop: 15,
    justifyContent: "center",
  },
});

export default CampoLogin;