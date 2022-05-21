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

function ModalLista() {
  // const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  const [lista, setlista] = useState(route.params.listKey);
  const [id,setId] =useState(route.params.idKey)

  const [data, setData] = useState(route.params.dataKey);
  const [local, setLocal] = useState(route.params.localKey);
  const [nomeLista, setNomeLista] = useState(route.params.listakey);
  const [maskedValue, setMaskedValue] = useState("");
  const [unMaskedValue, setUnmaskedValue] = useState("");
  let listId = "";

  const criarLista = () => {
    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("name", nomeLista);
    formData.append("place", local);
    formData.append("date", data);
    api
      .post("/createlist ", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        listId =response.data.id
        navigation.navigate("Lista" , {listIdKey: listId});
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
            <Text style={styles.modalText}>Crie sua Lista</Text>
            <View>
              <TextInput
                type="text"
                placeholder="Nome da Lista"
                style={styles.email}
                onChangeText={setNomeLista}
              ></TextInput>
              <TextInput
                type="text"
                placeholder="Local"
                style={styles.email}
                onChangeText={setLocal}
              ></TextInput>
              <View>
                <MaskedTextInput
                  mask="99/99/9999"
                  onChangeText={(text, rawText) => {
                    setData(text);
                    setMaskedValue(text);
                    setUnmaskedValue(rawText);
                  }}
                  style={styles.email}
                  keyboardType="numeric"
                  type="data"
                  placeholder="Data"
                ></MaskedTextInput>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Ionicons.Button
                name="create"
                color="white"
                backgroundColor="#4C37F1"
                size={24}
                onPress={criarLista}
              >
                Criar
              </Ionicons.Button>
            </View>
            <View style={{ marginTop: 20 }}>
              <MaterialIcons.Button
                color="white"
                backgroundColor="#4C37F1"
                size={24}
                name="cancel"
                onPress={() => navigation.navigate("Home", { paramKey: nome })}
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

export default ModalLista;
