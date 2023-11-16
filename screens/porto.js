import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
const ProfilePage = () => {
  const [count, setCount] = useState(0);

  const user = {
    name: 'Selly ',
    fullname: 'Selly Resty Wijayanti',
    email: 'sellyresty17@gmail.com',
    bio: 'Halo semuanya, kenalin namaku selly resty wijayanti biasa dipanggil selly, here is my projects.',
    title: 'My Projects',
  };

  const onPressLikes = () => {
    setCount(count + 1);
  };

  const onPressDislikes = () => {
    if (count === 0) {
      Alert.alert("Sudah mencapai batas");
    } else {
      setCount(count - 1);
    }
  };

  const BtnDislikesClicked = () => (
    <TouchableOpacity onPress={onPressDislikes}>
      <FontAwesome name="thumbs-down" size={25} />
    </TouchableOpacity>
  );

  const BtnLikesClicked = () => (
    <TouchableOpacity onPress={onPressLikes}>
      <FontAwesome name="thumbs-up" size={25} />
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/hns.jpeg')}style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.fullname}>{user.fullname}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Button checkPrimaryCondition={true} btnStyle={styles.btnC} title="Contact me" textStyle={styles.txtBtnC} />
      <Text style={styles.title}>{user.title}</Text>
      <Image source={require('../assets/images/hc.png')}style={styles.project} />
      <Text style={styles.hc}>House Cleaner App</Text>
      <Image source={require('../assets/images/sforum.png')}style={styles.project} />
      <Text style={styles.hc}>SForum Website</Text>
      <Text style={styles.likes}>Total Likes</Text>
      <Text style={styles.likesCount}>{count}</Text>
          <View style={styles.likesContainer}>
            <View style={styles.btnLikesSection}>
              <BtnDislikesClicked />
              <Text style={styles.likesDesc}>Dislikes</Text>
            </View>
            <View style={styles.btnLikesSection}>
              <BtnLikesClicked />
              <Text style={styles.likesDesc}>Likes</Text>
            </View>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fullname: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10
  },
  bio:{
    fontSize: 16,
    textAlign:'center',
    marginBottom: 20
  },

  title:{
    fontSize: 20,
    marginTop: 30,
    right: 100,
    fontStyle: 'normal',
    marginBottom: 20,
  },
  project: {
    width: 300,
    height: 200,
  },
  btnC:{
    backgroundColor: '#5393F7',
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    width: "40%",
    marginVertical: 12,
  },
  txtBtnC:{
    color: '#FFFFFF',
  },
  likesContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    marginVertical: 6,
  },
  btnLikesSection: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  titleLikes: {
    marginBottom: 8,
    marginTop: 40,
    textAlign: "center",
  },
  likesCount: {
    textAlign: "center",
    color: '#E5141E',
  },
  likesDesc: {
    color: '#fff',
  },
  likes: {
    textAlign: "center",
    color:'#fff',
    marginTop:20,
  },
  hc: {
    right: 80,
    padding: 8,
  }

});

export default ProfilePage;
