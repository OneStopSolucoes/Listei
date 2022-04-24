import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import NavBar from "../Componentes/NavBar/NavBar";
import { useNavigation, useRoute } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  const [teste, setTeste] = useState(route.params.paramKey);
  console.log(route.params.paramKey);

  return (
    <SafeAreaView style={styles.principal}>
      <View>
        <View style={styles.boasVindas}>
          <Text style={styles.boasVindasText}>
            Seja Bem vindx:{" "}
            {teste === "gabriela.muniz" ? "Gabriela Muniz" : teste}
          </Text>
        </View>

        <View style={styles.button}>
          <Button
            title="Criar Uma Lista"
            color="#4C37F1"
            onPress={() => navigation.navigate("ModalLista", { paramKey: nome })}
            // onPress={() => ModalLista}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Listas Criadas"
            color="#4C37F1"
            onPress={() => navigation.navigate("Lista", { paramKey: nome })}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Perfil"
            color="#4C37F1"
            onPress={() =>
              navigation.navigate("Perfil", {
                paramKey: nome,
              })
            }
          />
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
    borderColor: "gray",
    borderWidth: 3,
  },
  boasVindasText: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default Home;
