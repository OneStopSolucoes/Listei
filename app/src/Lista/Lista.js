import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import AppList from "./AppList";
import api from "../services/api";
function Lista(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const [item, setItem] = useState();
  const [listaId, setListaId] = useState(route.params.listkey);
  const [quantidade, setQuantidade] = useState();
  const [valor, setValor] = useState();
  const [nome, setNome] = useState(route.params.paramKey);
  const [nomeLista, setNomelista] = useState(route.params.listNome);
  const [lugarLista, setLugarlista] = useState(route.params.listLugar);
  const [dataLista, setDatalista] = useState(route.params.listData);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista</Text>
        <View style={styles.viewInfo}>
          <Text style={styles.info}>Nome: {nomeLista}</Text>
          <Text style={styles.info}>Lugar: {lugarLista}</Text>
          <Text style={styles.info}>Data: {dataLista}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="O que está faltando em casa?"
            clearButtonMode="always"
            onChangeText={setItem}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            keyboardType={"numeric"}
            clearButtonMode="always"
            onChangeText={setQuantidade}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor do Produto"
            keyboardType={"numeric"}
            clearButtonMode="always"
            onChangeText={setValor}
          />
          {/* <TouchableOpacity style={styles.button} onPress={adicionarItem}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity> */}
          <ScrollView>
            <AppList
              key={listaId}
              id={listaId}
              item={item}
              quantidade={quantidade}
              valor={valor}
            />
          </ScrollView>
          <View style={styles.soma}>
            <TouchableOpacity
              style={styles.buttonVoltar}
              onPress={() =>
                navigation.navigate("ListaCriada", { paramKey: nome })
              }
            >
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  info: {
    color: "black",
    fontSize: 15,
  },
  viewInfo: {
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: "90%",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    alignItems: "stretch",
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

  buttonCalcular: {
    marginTop: 10,
    height: 30,
    backgroundColor: "#4C37F1",
    borderRadius: 5,

    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#fff",
  },
  buttonSalvar: {
    marginTop: 10,
    height: 30,
    backgroundColor: "#4C37F1",
    borderRadius: 5,

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
  buttonVoltar: {
    marginTop: 10,
    height: 30,
    backgroundColor: "grey",
    borderRadius: 5,

    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#fff",
  },
});

export default Lista;
