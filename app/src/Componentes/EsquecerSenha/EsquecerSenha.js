import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

function EsquecerSenha() {
  return (
    <View>
      <TouchableOpacity
        style={styles.principal}
        onPress={() => alert("Você que lute")}
      >
        <Text style={styles.texto}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    marginTop: 30,
  },
  texto: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "black",
  },
});

export default EsquecerSenha;
