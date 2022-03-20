import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

function NavBar() {
    const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Home"
        color="#4682B4"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Lista"
        color="#4682B4"
        onPress={() => navigation.navigate("Lista")}
      />
      <Button
        title="Perfil"
        color="#4682B4"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}

export default NavBar;