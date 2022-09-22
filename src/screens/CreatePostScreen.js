import { StyleSheet, Text, Image, View, Button, TextInput} from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import {
    Entypo,
  } from "@expo/vector-icons";

const CreatePostScreen = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        });
      
        console.log(result);
      
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    const user = {
        id: "u1",
        image:
          "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        name: "Vadim Savin",
      };

      const [description,setDescription] = useState("");

      const onPost = () => {
        console.warn("Button Pressed", description);
        setDescription("");
      }

  return (
    <View style={styles.container}>
   <View style={styles.header}>
  <Image source={{ uri: user.image }} style={styles.profileImage} />
  <Text style={styles.name}>Hey {user.name}!</Text>
  <Text style={styles.caption}> Share your thoughts.</Text>
  </View>
  <TextInput style={styles.placeholder}
   placeholder="What's on your mind?" multiline
   value={description} 
   onChangeText = {setDescription}
   />

<Image source={{ uri: image }} style={styles.image} />

<View style={styles.upload}>
    <Entypo
    onPress={pickImage}
    name="upload"
    size={25}
    color="gray"
    style={styles.icon}
  />
</View>


   <Button style={styles.btn} onPress={onPost} title="Publish" disabled={!description} />
  </View>
  )
}

export default CreatePostScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal:20,
    paddingTop: 30,
    
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        marginBottom:'auto',
        
      },
    header:{
        alignItems:'center',
    },
    profileImage:{
        width:70,
        height:70,
        borderRadius:50,

    },
    upload:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:15,

    },
    name:{
        fontSize:18,
        fontWeight:'300',
        marginTop:10,
    },
    caption:{
    fontSize:14,
    color:'gray',
    fontStyle:'italic',
    },
    placeholder:{
        marginTop:15,
        fontSize:15,
    },
    btn:{
       
        marginTop:'auto',
        marginVertical:10,
    }
})