import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, Pressable, navigation, TouchableOpacity } from 'react-native';

const CustomTextInput = (props) => { 
    return (
      <TextInput
      secureTextEntry={props.secureTextEntry}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderColor}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 9,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        borderColor: '#F875AA',
        marginBottom: 10,
      },
  });

export default CustomTextInput;