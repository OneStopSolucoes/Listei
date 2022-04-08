import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NavBar from "../Componentes/NavBar/NavBar";

function Home() {
  const route = useRoute();
  const [teste, setTeste] = useState(route.params.paramKey);
  console.log(route.params.paramKey)
  return (
    <View style={styles.principal}>
      <View style={styles.boasVindas}>
        <Text style={styles.boasVindasText}>
          Seja Bem vindx:{" "}
          {teste === "gabriela.muniz" ? "Gabriela Muniz" : teste}
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
    borderColor: "gray",
    borderWidth: 3,
  },
  boasVindasText: {
    fontSize: 20,
  },
});

export default Home;
