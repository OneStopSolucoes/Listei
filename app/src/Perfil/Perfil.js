import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function Perfil() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nome, setNome] = useState(route.params.paramKey);
  return (
    <SafeAreaView style={styles.principal}>
      <Text>Perfil</Text>
      <View style={styles.button}>
        <Button
          title="Voltar"
          color="#4C37F1"
          onPress={() => navigation.navigate("Home", { paramKey: nome })}
        />
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


export default Perfil;
