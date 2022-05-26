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

function EmailSenha() {
  const navigation = useNavigation();
  const route = useRoute();
  const [email, setEmail] = useState();

  const enviarEmail = () => {
    if (email === undefined) {
      alert("Preencha o campos");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);


    api
      .post("/forgetpassword", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data)
        navigation.navigate("CodeSenha", {paramEmail: email});
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
            <Text style={styles.modalText}>Informe seu email</Text>
            <View>
              <TextInput
                type="text"
                placeholder="Email"
                style={styles.email}
                onChangeText={setEmail}
              ></TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
              <Ionicons.Button
                name="create"
                color="white"
                backgroundColor="#4C37F1"
                size={24}
                onPress={enviarEmail}
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

export default EmailSenha;
