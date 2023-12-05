import React, { useState } from 'react';
import { Text, ScrollView, View, Image, StyleSheet, TextInput, Pressable, navigation, Button } from 'react-native';
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput';

const Login = ({navigation}) =>{
  const [password, setPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
      <CustomTextInput 
      placeholder="Username"
      placeholderColor="#000"/>
      <CustomTextInput 
    placeholder="Password"
    secureTextEntry={true}
    value={password}
    onChangeText={handlePasswordChange}
    placeholderColor="#000"/>
      <CustomButton title='Login' bg='#F875AA' onPress={()=> navigation.navigate('Porto')}/>
      <View style={{ flexDirection: 'row', paddingTop:20 }}>
            <View style={{ height: 2, flex: 1, backgroundColor: 'lightgrey', alignSelf: 'center'}}></View>
            <Text style={{ paddingHorizontal: 10, fontSize: 12, fontWeight: '500', color:'grey' }}>Atau</Text>
            <View style={{ height: 2, flex: 1, backgroundColor: 'lightgrey', alignSelf: 'center'}}></View>
        </View>
        <View style={{paddingTop:20}}>
          <CustomButton title='Register' bg='#554994' onPress={()=> navigation.navigate('Signup')}/>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDFDF',
  },
  logo: {
    left: 50,
    width: '70%',
    height: 40,
    marginBottom: 59,
  },
});
export default Login;