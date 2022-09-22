import { View, ScrollView, Image, Text, Pressable, FlatList, StyleSheet } from "react-native";
import FeedPost from "../components/FeedPost";
import posts from "../../assets/data/posts.json";
import { useNavigation } from "@react-navigation/native";
import {
    Entypo,
  } from "@expo/vector-icons";



const img ="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";


const FeedScreen = () => {

    const navigation = useNavigation();
    const createPost = () => {
        navigation.navigate("Create New Post");
      };
  return (
    <View style={styles.container}>
       <FlatList
     data={posts}
     renderItem = {({item})=> <FeedPost post={item}/>}
     showsVerticalScrollIndicator={false}
     ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{ uri: img }} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="upload"
            size={24}
            color="gray"
            style={styles.icon}
          />
        </Pressable>
      )}
     /> 
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header: {
        padding: 20,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
      },
      name: {
        color: "gray",
      },
      icon: {
        marginLeft: "auto",
      },

})

export default FeedScreen;