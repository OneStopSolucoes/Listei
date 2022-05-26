import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import api from "../services/api";
import AppList from "./AppList";

function ListaCriada() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  const [lista, setLista] = useState([]);
  const [idUser, setIdUser] = useState(route.params.idKey);

  async function carregaListasUsuario() {
    await api
      .get(`/userlists/${idUser}`)
      .then((response) => {
        setLista(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    carregaListasUsuario();
  }, []);

  return (
    <ScrollView>
      <View style={styles.principal}>
        <Text style={styles.title}>Lista Criadas</Text>
        <View style={styles.button}>
          {lista?.map((list) => (
            <View>
              <View style={styles.item}></View>
              <AntDesign.Button
                name="shoppingcart"
                size={24}
                style={styles.lista}
                color="black"
                key={list}
                onPress={() =>
                  navigation.navigate("Lista", {
                    listkey: list.id,
                    listNome: list.name,
                    listLugar: list.place,
                    listData: list.date,
                  })
                }
              >
                <View>
                  <Text style={styles.textName}>{list.name} </Text>
                </View>
              </AntDesign.Button>
            </View>
          ))}
          <View style={styles.item}></View>
          <View style={styles.voltar}>
            <Ionicons.Button
              name="chevron-back-circle-sharp"
              color="white"
              backgroundColor="grey"
              size={24}
              onPress={() => navigation.navigate("Home", { paramKey: nome })}
            >
              Voltar
            </Ionicons.Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
  },

  titulo: {
    fontSize: 30,
    color: "black",
    justifyContent: "flex-start",
  },

  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  lista: {
    color: "black",
    height: 60,
    width: 400,
    backgroundColor: "white",
  },
  voltar: {
    marginTop: 50,
    color: "white",
  },
  textName: {
    fontSize: 16,
    color: "black",
  },
  textPlace: {
    fontSize: 14,
    color: "white",
  },
  textData: {
    fontSize: 12,
    color: "white",
  },
  item: {
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 10,
    width: 400,
  },
});
export default ListaCriada;
