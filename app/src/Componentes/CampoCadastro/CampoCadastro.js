import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";

function CampoCadastro() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [hide, setHide] = useState(true);

  const navigation = useNavigation();

  enviarCadastro = () => {
    if (nome === undefined || email === undefined || senha === undefined) {
      alert("Preencha TODOS os campos");
      return;
    }
    // {username: nome,email: email, password: senha}
    const formData = new FormData();
    formData.append("username", nome);
    formData.append("email", email);
    formData.append("password", senha);

    api
      .post("/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        navigation.navigate("Login");
        alert(response.data.message);
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
          type="nome"
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>
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

      <TouchableOpacity style={styles.buttonCadastro} onPress={enviarCadastro}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonVoltar}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Voltar</Text>
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
  buttonView: {
    marginTop: 15,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonVoltar: {
    marginTop: 10,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 5,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#fff",
  },
  buttonCadastro: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#4C37F1",
    borderRadius: 5,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#fff",
  },
});

export default CampoCadastro;
