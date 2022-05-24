import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import api from "../services/api";

function AppItem(props) {
  const deletarItem = () => {
    const formData = new FormData();
    formData.append("listitem_id", props.id);
    api
      .post("/deletelistitem ", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
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
          onPress={handleDeletePress}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
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
    width: 40,
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
  viewText: {},
  viewButton: {
    marginLeft: 240,
    marginTop: -80,
  },
});

export default AppItem;
