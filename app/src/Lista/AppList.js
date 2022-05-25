import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../services/api";
import AppItem from "./AppItem";

export default function AppList(props) {
  const route = useRoute();
  const [items, setItems] = useState([]);
  const [idLista, setIdlista] = useState(props.id);
  const [listaId, setListaId] = useState(props.listaId);

  console.log(items);
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


  
 

  return (
    <View>
      <View>
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
});
