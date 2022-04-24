import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function ListaCriada() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  return (
    <SafeAreaView style={styles.principal}>
      <Text>Lista Criadas</Text>
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
});
export default ListaCriada;
