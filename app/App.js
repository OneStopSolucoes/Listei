import React from 'react';
import { Button, Text, View } from 'react-native';
import Login from '../app/src/Login/Login.js';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Login/>
    </View>
  );
}

export default App;