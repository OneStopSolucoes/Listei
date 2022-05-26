import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
function EsquecerSenha() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.principal}
        onPress={() =>    navigation.navigate("EmailSenha"
         )}
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
