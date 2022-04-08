import { useNavigation, useRoute } from "@react-navigation/native";

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../Componentes/NavBar/NavBar";

function Perfil() {
  const route = useRoute();

  return (
    <View style={styles.principal}>
    <View style={styles.boasVindas}>
      <Text style={styles.boasVindasText}>
        Perfil
      </Text>
    </View>

    <NavBar />
    {/* // será utilizado logo mais */}
  </View>
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
    marginBottom: "170%",
    width: "100%",

  },
  boasVindasText: {
    fontSize: 20,
  },
});

export default Perfil;
