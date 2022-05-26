import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../services/api";
import AppItem from "./AppItem";

export default function AppList(props) {
  const route = useRoute();
  const [items, setItems] = useState([]);
  const [idLista, setIdlista] = useState(props.id);
  const [listaId, setListaId] = useState(props.listaId);
  const [item, setItem] = useState(props.item);
  const [quantidade, setQuantidade] = useState(props.quantidade);
  const [valor, setValor] = useState(props.valor);
  console.log(idLista);

  var total = items.reduce(getTotal, 0);
  function getTotal(total, item) {
    return total + item.price * item.qtd;
  }

  async function carregaLista() {
    await api
      .get(`/listitems/${idLista === undefined ? listaId : idLista}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error.response + "tô no erro");
      });
  }
  useEffect(() => {
    carregaLista();
  }, []);

  const adicionarItem = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("list_id", idLista === undefined ? listaId : idLista);
    formData.append("name", props.item);
    formData.append("qtd", props.quantidade);
    formData.append("price", props.valor);
    
    console.log(formData)
    api
      .post("/createlistitem ", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
       carregaLista();
      })
      .catch((error) => {
        console.log(error+ "olá erro");
      });
    //limpar campos
  };

  return (
    <View>
      <View>
        <TouchableOpacity style={styles.button} onPress={adicionarItem}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Itens</Text>
        {items.map((item) => {
          return (
            <View>
              <View style={styles.item}></View>
              <AppItem
                key={item.id}
                id={item.id}
                item={item.name}
                quantidade={item.qtd}
                preco={item.price}
              />
            </View>
          );
        })}
        <View style={styles.item}></View>
        <Text style={styles.title}>Valor Total: R${total} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
  },
  item: {
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    height: 30,
    backgroundColor: "#4C37F1",
    borderRadius: 5,
    paddingHorizontal: 24,
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
