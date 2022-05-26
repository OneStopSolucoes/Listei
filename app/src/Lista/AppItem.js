import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import api from "../services/api";

function AppItem(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleDel, setModalVisibleDel] = useState(false);
  const [nomeNovo, setNomeNovo] = useState(props.item);
  const [quantidadeNovo, setQuantidadeNovo] = useState(props.quantidade);
  const [precoNovo, setPrecoNovo] = useState(props.preco);

  const deletarItem = () => {
    const formData = new FormData();
    formData.append("listitem_id", props.id);
    console.log(props.id);

    api
      .post("/deletelistitem  ", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
        props.carregarLista;
      })
      .catch((error) => {
        console.log(error.response.data + "olá");
      });
  };

  const editarItem = () => {
    const formData = new FormData();
    formData.append("listitem_id", props.id);
    formData.append("name", nomeNovo);
    formData.append("qtd", quantidadeNovo);
    formData.append("price", precoNovo);
    api
      .post("/editlistitem ", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
        setModalVisible(!modalVisible);
        props.carregarLista;
      })
      .catch((error) => {
        console.log(error.response.data + "olá");
      });
  };
  function handleDeletePress() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja excluir este item?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sim", onPress: deletarItem() },
      ],
      { cancelable: false }
    );
  }

  return (
    <View>
      <View style={styles.viewText}>
        <Text style={styles.textItem}>{props.item}</Text>
        <Text>Quantidade:{props.quantidade}</Text>
        <Text>Valor: R${props.preco}</Text>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => setModalVisibleDel(true)}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <Pressable
          style={styles.editButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </Pressable>
       {/* editar */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textItem}>Editar</Text>
                <TextInput
                  type="text"
                  placeholder="Item"
                  style={styles.email}
                  value={nomeNovo}
                  onChangeText={setNomeNovo}
                ></TextInput>
                <TextInput
                  type="text"
                  placeholder="Quantidade"
                  style={styles.email}
                  value={quantidadeNovo}
                  onChangeText={setQuantidadeNovo}
                ></TextInput>
                <TextInput
                  type="text"
                  placeholder="Preço"
                  style={styles.email}
                  value={precoNovo}
                  onChangeText={setPrecoNovo}
                ></TextInput>
                <Pressable style={styles.buttonCadastro} onPress={editarItem}>
                  <Text style={styles.textStyle}>Editar</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonVoltar}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        {/* // deletar */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleDel}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisibleDel(!modalVisibleDel);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.textItem}>Editar</Text>
               <Text>Desejar Excluir o item : {props.item}</Text>
               
                <Pressable style={styles.buttonCadastro} onPress={deletarItem}>
                  <Text style={styles.textStyle}>Sim</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonVoltar}
                  onPress={() => setModalVisibleDel(!modalVisibleDel)}
                >
                  <Text style={styles.textStyle}>Não</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 20,
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    marginTop: 10,
  },
  editButton: {
    marginLeft: 10,
    height: 40,
    width: 80,
    marginTop: 10,
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
  },
  deleteButton: {
    marginLeft: 10,
    height: 40,
    width: 80,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: "#ccc",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  textItem: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginTop: 25,
  },

  viewButton: {
    marginLeft: 240,
    marginTop: -80,
  },
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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
  buttonVoltar: {
    marginTop: 10,
    height: 50,
    width: 80,
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
    width: 80,
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

export default AppItem;
