import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login"

const Stack = createNativeStackNavigator();

function Rotas(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          //   options={{
          //     headerTitle: (props) => <LogoTitle {...props} />,
          //     headerRight: () => (
          //       <Button
          //         onPress={() => alert("This is a button!")}
          //         title="Info"
          //         color="#00cc00"
          //       />
          //     ),
          //   }}
          />
           <Stack.Screen
            name="Cadastro"
            component={Cadastro}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
      
    )
}

export default Rotas;
