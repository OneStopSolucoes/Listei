import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function Perfil() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  const [email, setEmail] = useState(route.params.emailKey);
  return (
    <SafeAreaView style={styles.principal}>
      <View style={styles.classTitulo}>
        <Text style={styles.titulo}>Perfil</Text>
      </View>

      <View>
        <View style={styles.dados}>
          <Text style={styles.informacoes}>Nome : {nome}</Text>
          <Text style={styles.informacoes}>Email : {email}</Text>
        </View>
      </View>
      

      <View style={styles.classButton}>
        <View style={styles.button}>
          <Ionicons.Button
            name="exit"
            color="white"
            backgroundColor="#4C37F1"
            size={24}
            onPress={() => navigation.navigate("Login")}
          >
            Sair
          </Ionicons.Button>
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
    width: "80%",
  },
  classTitulo: {
    marginTop: 35,
  },
  titulo: {
    fontSize: 30,
    color: "black",
    justifyContent: "flex-start",
  },
  dados: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  informacoes: {
    fontSize: 20,
  },
  classButton: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Perfil;
