import React from 'react';
import { Text, ScrollView, View, Image, StyleSheet, TextInput, Pressable, navigation, Button } from 'react-native';
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
      <CustomTextInput 
      placeholder="Username"
      placeholderColor="#000"/>
      <CustomTextInput 
      placeholder="Password"
      placeholderColor="#000"/>
      <CustomButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFDFDF',
    padding: 8,
  },
  logo: {
    left: 50,
    width: '70%',
    height: 40,
    marginBottom: 59,
  },
});