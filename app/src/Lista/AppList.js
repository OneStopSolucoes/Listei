import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import api from "../services/api";
import AppItem from "./AppItem";

export default function AppList(props) {
  const [items, setItems] = useState([]);
let idLista = props.listaId

  useEffect(() => {
    api.get("/list", idLista)
    .then((response)=> {
      console.log(response.data + "aqui!!!")
      setItems(response.data)
      console.log(items)
    })
    .catch((error)=> {
      console.log(error)
    })
  },[]);

  if(items === "") {
    return <View><Text>Adicione</Text></View>;
  }
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
                item={item.quantidade + "  de " + item.descricao + item}
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
