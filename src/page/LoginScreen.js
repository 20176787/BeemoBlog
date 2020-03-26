import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import NavigationService from '../../NavigationService';
import {auth} from '../config/firebaseConfig'
const {width, height} = Dimensions.get('window');
export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const CheckLogin = () => {
      auth
          .signInWithEmailAndPassword(email, password)
          .then(() => NavigationService.navigate('TabBarBottom', {email: email}))
          .catch((e)=>console.log(e))

  };
  return (
    <ImageBackground
      style={{width: width, height: height * 1.1, zIndex: -1}}
      source={{
        uri:
          'https://firebasestorage.googleapis.com/v0/b/beemoapp-2619e.appspot.com/o/Beemo%2FLeague-of-Legends-Teemo-beemo-1319969-wallhere.com.jpg?alt=media&token=64027069-e671-4586-9944-c525e7838055',
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={styles.logo}>Beemo App</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="EMAIL..."
            placeholderTextColor="#003f5c"
            style={{height: 50, color: 'white'}}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="PASSWORD..."
            placeholderTextColor="#003f5c"
            style={{height: 50, color: 'white'}}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={CheckLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#feffcb',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  imagebackgroundStyle: {
    width,
    flex: 1,
    zIndex: -1,
    height: height * 1.1,
  },
});
