import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, Pressable, navigation, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
  return (
      <TouchableOpacity
      style={styles.btn}>
      <Text style={styles.txt}>Next</Text>
      </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: '80%',
    backgroundColor: '#F875AA',
    borderRadius: 25,
    justifyContent: 'center',
    height: 50,
    left: 40,


  },
  txt: {
    textAlign: 'center',
    color: '#fff',
  },
});
export default CustomButton;