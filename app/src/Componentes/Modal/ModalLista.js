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

function ModalLista() {
  // const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);

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
              ></TextInput>
              <TextInput
                type="text"
                placeholder="Local"
                style={styles.email}
              ></TextInput>
              <TextInput
                type="data"
                placeholder="Data"
                style={styles.email}
              ></TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                onPress={() => navigation.navigate("Lista", { paramKey: nome })}
                title="Criar"
                color="#4C37F1"
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                onPress={() => navigation.navigate("Home", { paramKey: nome })}
                title="Cancelar"
                color="#4C37F1"
              />
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
