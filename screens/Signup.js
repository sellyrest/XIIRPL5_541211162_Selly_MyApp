import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput';

const Signup = ({navigation}) =>{
  const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/Frame.png')}/>
        <Text style={styles.title}>Register</Text>
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
    secureTextEntry={true}
    value={password}
    onChangeText={handlePasswordChange}
    placeholderColor="#000"/>
        <CustomButton title='Next' bg='#DBC4F0' onPress={()=> navigation.navigate('Login')}/>
      </ScrollView>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDFDF',
    padding: 13,
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
  logo: {
    left: '35%',
    width: '30%',
    height: 100,
    marginBottom: 19,
  },
});
export default Signup;