/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//   'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//   'Shake or press menu button for dev menu\n' +
//   '-by Chanaka-',
// });

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Partner!
        </Text>
        <Text style={styles.instructions}>
          Couldn't find a life partner yet?
        </Text>
        <Text style={styles.instructions}>
          Login and enter your details. We will provide you a match.
        </Text>
        <TextInput style={styles.textinput}
          placeholder="Email"
        />
        <TextInput style={styles.textinput}
          placeholder="Password"
        />
        <Button
          onPress={showAlert}
          title="Login"
          color="#841584"
          accessibilityLabel="Click here to login"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textinput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

// Works on both iOS and Android
const showAlert = () => Alert.alert(
  'Alert',
  'Please press OK',
  [
    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ],
  { cancelable: false }
)
