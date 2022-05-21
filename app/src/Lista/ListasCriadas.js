import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

function ListaCriada() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  // const [info, setInfo] = useState(route.params.listKey);
  const [info, setInfo] = useState(["Feira", "Assaí", "12/05/2022"]);
  const [lista, setLista] = useState([1, 2, 3, 4, 5]);
  const [id,setId] =useState(route.params.idKey)
  console.log(id)



  return (
    <SafeAreaView style={styles.principal}>
      <Text>Lista Criadas</Text>
      <View style={styles.button}>
        {lista.map((list) => (
          <AntDesign.Button
            name="shoppingcart"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            key={list}
            onPress={() =>
              navigation.navigate("Lista", {
                listkey: [info[0], info[1], info[2]],
              })
            }
          >
            <Text>{info[0]}</Text>
            <Text>{info[1]}</Text>
            <Text>{info[2]}</Text>
          </AntDesign.Button>
        ))}

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
});
export default ListaCriada;
