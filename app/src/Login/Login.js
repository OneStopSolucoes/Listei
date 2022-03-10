import {visitors} from '@babel/traverse';
import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';


function Login() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 20,
          height: 200,
          margin:150,
        }}>
        <Text>Login</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 200,
            marginTop: 20,
          }}
          type="email"
          placeholder="Email"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 200,
            marginTop: 20,
          }}
          type="password"
          placeholder="senha"
        />
        <View
          style={{
            marginTop: 20,
          }}>
          <Button title="Login" color="#4682B4" />
        </View>
      </View>
    </View>
  );
}

export default Login;
