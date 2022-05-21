import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "../../assets/Listei.png";
import api from "../services/api";


function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  const [email,setEmail] = useState(route.params.emailKey);
  const [id,setId] =useState(route.params.idKey)

  const listas = () => {
    api.get("/list"/id)
    .then((response)=> {
      console.log(response.data)
      navigation.navigate("ListaCriada", { paramKey: nome, idKey: id })
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  return (
    <SafeAreaView style={styles.principal}>
      <Image source={Logo} style={styles.logo} />
      <View>
        <View style={styles.boasVindas}>
          <Text style={styles.boasVindasText}>
            Seja Bem vindx:{" "}
            {nome}
          </Text>
        </View>

        <View style={styles.button}>
          <Ionicons.Button
            name="create"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            onPress={() =>
              navigation.navigate("ModalLista", { paramKey: nome,idKey: id })
            }
          >
            Criar uma Lista
          </Ionicons.Button>
        </View>

        <View style={styles.button}>
          <FontAwesome.Button
            name="th-list"
            size={24}
            color="white"
            backgroundColor="#4C37F1"
            onPress={listas}
          >
            Listas Criadas
          </FontAwesome.Button>
        </View>

        <View style={styles.button}>
          <Ionicons.Button
            name="person"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            onPress={() =>
              navigation.navigate("Perfil", {
                paramKey: nome,
                emailKey: email,
              })
            }
          >
            Perfil
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
  boasVindas: {
    width: "100%",
  },
  boasVindasText: {
    fontSize: 40,
  },
  button: {
    marginTop: 20,
  },
  logo: {
    width: 400,
    height: 200,
    marginTop: 20,
  },
});

export default Home;
