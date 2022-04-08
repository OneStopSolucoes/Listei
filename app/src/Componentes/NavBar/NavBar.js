import React,{useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

function NavBar() {
    const navigation = useNavigation();
    const route = useRoute();
    const [nome,setNome] = useState(route.params.paramKey)
    
    console.log("NavBar" + route.params.paramKey)
  return (
    <View
      style={{
        flexDirection: "row",
        // marginTop: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Home"
        color="#4C37F1"
        onPress={() => navigation.navigate("Home", {
          paramKey: nome,
        })}
      />
      <Button
        title="Lista"
        color="#4C37F1"
        onPress={() => navigation.navigate("Lista")}
      />
      <Button
        title="Perfil"
        color="#4C37F1"
        onPress={() => navigation.navigate("Perfil", {
          paramKey: nome,
        })}
      />
    </View>
  );
}

export default NavBar;