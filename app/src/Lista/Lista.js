import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function Lista() {
  const navigation = useNavigation();
  const route = useRoute();
  const [array, setArray] = useState(route.params.listkey);
  const [nome, setNome] = useState(route.params.paramKey);
  console.log(array)
 
  return (
    <SafeAreaView style={styles.principal}>
      <Text>Lista</Text>
      <View style={styles.button}>
        <Text style={{ color: "black" }}>Nome da Lista: {array[0]}</Text>
        <Text style={{ color: "black" }}>Local: {array[1]}</Text>
        <Text style={{ color: "black" }}>Data: {array[2]}</Text>
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

export default Lista;
