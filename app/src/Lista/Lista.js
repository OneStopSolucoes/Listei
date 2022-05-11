import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, AntDesign,Entypo  } from "@expo/vector-icons";

function Lista() {
  const navigation = useNavigation();
  const route = useRoute();
  const [array, setArray] = useState(route.params.listkey);
  const [nome, setNome] = useState(route.params.paramKey);
  console.log(array);

  const adicionar = () => {
    return(
      <View style={styles.item}>
      <TextInput style={styles.inputItem} placeholder="Digite um item" />

      <TextInput style={styles.inputQuantidade} placeholder="quantidade" />

      <TextInput style={styles.inputValor} placeholder="valor" />
      </View>
    )

   
  };
  return (
    <SafeAreaView style={styles.principal}>
      <View style={styles.classTitulo}>
        <Text style={styles.titulo}>Lista</Text>
        <View>
          <Text style={{ color: "black" }}>Nome da Lista: {array[0]}</Text>
          <Text style={{ color: "black" }}>Local: {array[1]}</Text>
          <Text style={{ color: "black" }}>Data: {array[2]}</Text>
        </View>

        <View style={styles.button}>
          <AntDesign.Button
            name="plus"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            onPress={() => adicionar()}
          >
            Adicionar item
          </AntDesign.Button>
        </View>
        <View style={styles.button}>
          <AntDesign.Button
            name="calculator"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            onPress={() => console.log("calculei")}
          >
            Calcular
          </AntDesign.Button>
        </View>
        <View style={styles.button}>
          <Entypo.Button
            name="save"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            onPress={() => console.log("Salvei")}
          >
            Salvar
          </Entypo.Button>
        </View>
        <View style={styles.button}>
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

    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    // width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  classTitulo: {
    marginTop: 35,
  },
  titulo: {
    fontSize: 30,
    color: "black",
    justifyContent: "flex-start",
  },
  item: {
    flexDirection: "row",
    width: "90%",

    height: 50,
    alignItems: "center",

    marginTop: 10,
  },
  inputItem: {
    width: "40%",
    height: 50,
    padding: 8,
    fontSize: 18,
    justifyContent: "flex-start",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
  },
  inputQuantidade: {
    width: "15%",
    height: 50,
    padding: 8,
    fontSize: 18,
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    margin: 30,
  },
  inputValor: {
    width: "30%",
    height: 50,
    padding: 8,
    fontSize: 18,
    justifyContent: "flex-end",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    margin: 30,
  },
});

export default Lista;
