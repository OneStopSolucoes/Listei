import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaskedTextInput } from "react-native-mask-text";
import api from "../../services/api";

function NovaSenha() {
  const navigation = useNavigation();
  const route = useRoute();
  const [code, setCode] = useState(route.params.paramCode);
  const [email, setEmail] = useState(route.params.paramEmail);
  const [novaSenha, setNovaSenha] = useState();
  const [novaSenhaConfirmar, setNovaSenhaConfirmar] = useState();

  const mudancaSenha = () => {
    if (novaSenha === undefined || novaSenhaConfirmar === undefined) {
      alert("Preencha os campos");
      return;
    }

    if (novaSenha  !==  novaSenhaConfirmar ) {
      alert("As senhas tem que ser iguais");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("code", code);
    formData.append("newpassword", novaSenha);
    formData.append("confirmnewpassword", novaSenhaConfirmar);


    api
      .post("/changepassword", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data)
        navigation.navigate("Login");
        alert("Senha alterada com sucesso!")
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Informe a nova senha</Text>
            <View>
              <TextInput
                type="text"
                placeholder="Digite a nova senha"
                style={styles.email}
                onChangeText={setNovaSenha}
              ></TextInput>
               <TextInput
                type="text"
                placeholder="Confirme a nova senha"
                style={styles.email}
                onChangeText={setNovaSenhaConfirmar}
              ></TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
              <Ionicons.Button
                name="create"
                color="white"
                backgroundColor="#4C37F1"
                size={24}
                onPress={mudancaSenha}
              >
                Enviar
              </Ionicons.Button>
            </View>
            <View style={{ marginTop: 20 }}>
              <MaterialIcons.Button
                color="white"
                backgroundColor="#4C37F1"
                size={24}
                name="cancel"
                onPress={() => navigation.navigate("Login")}
              >
                Cancelar
              </MaterialIcons.Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 500,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  email: {
    flexDirection: "row",
    borderRadius: 5,
    width: 200,
    height: 50,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
  },
});

export default NovaSenha;
