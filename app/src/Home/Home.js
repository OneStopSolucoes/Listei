import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import NavBar from "../Componentes/NavBar/NavBar";


function Home() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home</Text>

      </View>
      <NavBar/>
    </View>
  );
}

export default Home;
