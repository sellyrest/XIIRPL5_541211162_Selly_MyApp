import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <CustomTextInput 
      placeholder="Fullname"
      placeholderColor="#000"/>
        <CustomTextInput 
      placeholder="Username"
      placeholderColor="#000"/>
        <CustomTextInput 
      placeholder="Email"
      placeholderColor="#000"/>
      <CustomTextInput 
      placeholder="Password"
      placeholderColor="#000"/>
        <CustomButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDFDF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#F875AA',
  },
  input: {
    width:380,
    height: 50,
    borderRadius:15,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  button: {
    borderRadius:15,
    backgroundColor:'#FACBEA',
  }
});

export default Signup;
