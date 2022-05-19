import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import AppItem from "./AppItem";

export default function AppList() {
  const [items, setItems] = useState([
    { id: 1, quantidade: 5, descricao: "arroz" },
    { id: 2, quantidade: 1, descricao: "feijão" },
    { id: 3, quantidade: 0.5, descricao: "lentilha" },
    { id: 4, quantidade: 1, descricao: "massa" },
    { id: 5, quantidade: 1, descricao: "katchup" },
    { id: 6, quantidade: 1, descricao: "queijo-ralado" },
  ]);

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
                item={item.quantidade + "  de " + item.descricao}
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
  item:{
    borderWidth:1,
    borderColor: "grey",
    marginTop: 10,
  }
});
