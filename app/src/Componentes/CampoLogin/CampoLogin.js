import React, { useState } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";

function CampoLogin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [hide, setHide] = useState(true);
  let nome = "";
  let id = "";

  const navigation = useNavigation();

  const efetuarLogin = () => {
    if (email === undefined || senha === undefined) {
      alert("Preencha TODOS os campos");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", senha);

    api
      .post("/login", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        id = response.data.id;
        nome = response.data.username;
        setEmail(response.data.email)
        navigation.navigate("Home", {
          paramKey: nome,
          emailKey: email,
          idKey: id,
        });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
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
            <Ionicons name="eye-off" color="fff" size={25} />
          ) : (
            <Ionicons name="eye" color="fff" size={25} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={efetuarLogin} style={styles.buttonCadastro}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastro")}
        style={styles.buttonCadastro}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
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

  buttonCadastro: {
    marginTop: 10,
    height: 40,
    backgroundColor: "#4C37F1",
    borderRadius: 5,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CampoLogin;
