import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Button } from "react-native";
import api from "../services/api";
import AppItem from "./AppItem";
import ListaCriada from "./ListasCriadas";



export default function AppList(props) {
  const [items,setItems] = useState([])
  const[idLista, setIdlista] = useState(props.id)
  console.log(props.id)

  async function carregaLista() {
    // await api.get(`/listitems/${idLista}`)
    await api.get(`/listitems/${idLista}`)
    .then((response)=> {
      // console.log(response.data)
      setItems(response.data)
      console.log(items)
    })
    .catch((error)=> {
      console.log(error.response+ "tô no erro")
    })
  }

  useEffect(() => {
  carregaLista()
  },[]);

 

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
