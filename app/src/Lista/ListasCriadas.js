import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import api from "../services/api";
import AppList from "./AppList";


function ListaCriada(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  // const [info, setInfo] = useState(route.params.listKey);
  // const [info, setInfo] = useState(["Feira", "Assaí", "12/05/2022"]);
  const [lista, setLista] = useState([]);
  const [idUser, setIdUser] = useState(route.params.idKey);
  const [id, setId] = useState();
  console.log(id);

  async function carregaListasUsuario() {
    await api
      .get(`/userlists/${idUser}`)
      .then((response) => {
        setLista(response.data);
        console.log(lista);
        setId(response.data.id)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    carregaListasUsuario();
  }, []);

  return (
    <SafeAreaView style={styles.principal}>
      <Text style={styles.title}>Lista Criadas</Text>
      <View style={styles.button}>
        {lista?.map((list) => (
          <AntDesign.Button
            name="shoppingcart"
            styles={styles.lista}
            backgroundColor="#4C37F1"
            size={24}
            key={list}
            onPress={() =>
              navigation.navigate("Lista", {
                listkey: lista.id,
              })
            }
          >
            <View>
              <Text style={styles.textName}>{list.name}</Text>
            </View>
            {/* <View style={{ marginTop: 20 }}>
              <Text style={styles.textPlace}>Local:{list.place}</Text>
            </View>
            <View style={{ marginTop: 40 }}>
            <Text style={styles.textData}>Data:{list.date}</Text>
            </View> */}
           
          </AntDesign.Button>
        ))}
        <View style={styles.voltar}>
          <Ionicons.Button
            name="chevron-back-circle-sharp"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            onPress={() => navigation.navigate("Home", { paramKey: nome })}
          >
            Voltar
          </Ionicons.Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
    marginTop: 25,
  },
  lista: {
    color: "white",
    height: 30,
    width: 80,
  },
  voltar: {
    marginTop: 50,
    color: "white",
  },
  textName: {
    fontSize: 16,
    color: "white",
  },
  textPlace: {
    fontSize: 14,
    color: "white",

  },
  textData: {
    fontSize: 12,
    color: "white",

  },
});
export default ListaCriada;
