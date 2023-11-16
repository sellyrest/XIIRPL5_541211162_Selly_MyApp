import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Porto from './screens/porto';


export default function App() {
  return (
    <ScrollView >
      <Porto />
    </ScrollView>
  );
};
