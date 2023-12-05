import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, Pressable, navigation, Button } from 'react-native';

const CustomButton = (props) => {
  return (
      <Button
      title={props.title} color={props.bg} onPress={props.onPress}
      />
  );
}
export default CustomButton;