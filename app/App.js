import React from 'react';
import { Button, Text, View } from 'react-native';
import Login from '../app/src/Login/Login.js';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor: "#40E0D0" }}>
      <Login/>
    </View>
  );
}

export default App;