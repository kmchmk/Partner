import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  AppRegistry,
  Image,
  TouchableOpacity

} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import Login from './App/Views/Login';

// class LoginScreen extends Component {
//   static navigationOptions = {
//     title: 'Login',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to Partner!
//         </Text>
//         <Text style={styles.instructions}>
//           Could not find a life partner yet?
//         </Text>
//         <Text style={styles.instructions}>
//           Login and enter your details. We will provide you a match.
//         </Text>
//         <TextInput style={styles.textinput}
//           placeholder="Email"
//         />
//         <TextInput style={styles.textinput}
//           placeholder="Password"
//         />
//         <Button
//           onPress={() => navigate('Profile')}
//           title="Login"
//           color="#841584"
//           accessibilityLabel="Click here to login"
//         />

//       </View>
//     );
//   }
// }

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image source={require('./App/img/partner.png')}
          style={{ width: 180, height: 150 }} />
        <Button
          onPress={() => navigate('Login')}
          title="Login"

          accessibilityLabel="Click here to login"
        />
        <Button
          onPress={() => navigate('Profile')}
          title="My Profile"
          color="#041084"
          accessibilityLabel="Click here to edit my profile"
        />
        <Button
          onPress={() => navigate('Match')}
          title="My Match"
          color="#111154"
          accessibilityLabel="Click here to find the match"
        />
        <TouchableOpacity onPress={showAlert}>
          <Text>Left Button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image source={require('./App/img/my-pic.jpg')}
          style={{ width: 100, height: 100 }} />
        {/* <Text>Name</Text> */}
        <TextInput placeholder="Name" />
        {/* <Text>Age</Text> */}
        <TextInput placeholder="Age" />
        {/* <Text>Adrress</Text> */}
        <TextInput placeholder="Address" />
        {/* <Text>Nationality</Text> */}
        <TextInput placeholder="Nationality" />
        {/* <Text>Straigt/Gay</Text> */}
        <TextInput placeholder="Straight/Gay" />
        {/* <Text>What do you expect</Text> */}
        <TextInput placeholder="To talk / To time pass / Marry" />
        <Button
          onPress={showAlert}
          title="Save" />
        <Button
          onPress={() => navigate('Match')}
          title="Match"
          color="#841584"
          accessibilityLabel="Click here to find a match"
        />
      </View>
    );
  }
}

class MatchScreen extends Component {
  static navigationOptions = {
    title: 'Match',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {/* <Text>Age</Text> */}
        <TextInput placeholder="Age" />
        {/* <Text>Adrress</Text> */}
        <TextInput placeholder="Nationality" />
        {/* <Text>Straigt/Gay</Text> */}
        <TextInput placeholder="Straight/Gay" />
        {/* <Text>What do you expect</Text> */}
        <TextInput placeholder="To talk / To time pass / Marry" />
        <Button
          onPress={() => navigate('Chat')}
          title="Chat"
          accessibilityLabel="Click here to chat"
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Send Message',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {/* <Text>Name</Text> */}
        <TextInput placeholder="Name" />
        {/* <Text>Age</Text> */}
        <TextInput placeholder="Age" />
        {/* <Text>Adrress</Text> */}
        <TextInput placeholder="Address" />
        {/* <Text>Nationality</Text> */}
        <TextInput placeholder="Nationality" />
        {/* <Text>Straigt/Gay</Text> */}
        <TextInput placeholder="Straight/Gay" />
        {/* <Text>What do you expect</Text> */}
        <TextInput placeholder="To talk / To time pass / Marry" />
        <Button
          onPress={showAlert}
          title="Send" />
      </View>
    );
  }
}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  // Login: { screen: LoginScreen },
  Match: { screen: MatchScreen },
  Chat: { screen: ChatScreen },


});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
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
    width: 250,
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
