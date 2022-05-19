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

function Lista() {
  const navigation = useNavigation();
  const route = useRoute();
  const [array, setArray] = useState(route.params.listkey);
  const [nome, setNome] = useState(route.params.paramKey);
  let [list, setList] = useState(0);

  console.log(array);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Lista</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="O que está faltando em casa?"
            clearButtonMode="always"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite a quantidade"
            keyboardType={"numeric"}
            clearButtonMode="always"
          />
          <TextInput
            style={styles.input}
            placeholder="Valor do Produto"
            keyboardType={"numeric"}
            clearButtonMode="always"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
          <ScrollView>
            <AppList />
          </ScrollView>
          <View style={styles.soma}>
            <Text style={styles.title}>Valor Total: R$</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
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
});

export default Lista;
