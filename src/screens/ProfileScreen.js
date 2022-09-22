import { StyleSheet, Text, Image, FlatList, Pressable, View } from 'react-native'
import React from 'react';
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import user from "../../assets/data/user.json";
import FeedPost from '../components/FeedPost';

const ProfileScreenHeader = () => {

const dummy_img ="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const bg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={{uri:bg}} style={styles.bgImage}/>
            <View style={styles.headerProfile}>
            <Image source={{uri:dummy_img}} style={styles.profileImg}/>
            <Text style={styles.name}>Vadim Savim</Text>
            </View>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.btns}>
            <Pressable style={[styles.btn, {backgroundColor:'#009dff'}]}>
            <AntDesign name="pluscircle" size={16} color="white" />
              <Text style={{paddingLeft:8, color:'white', fontWeight:'600'}}>
                Add to Story
              </Text>
            </Pressable>
            <Pressable style={styles.btn}>
            <MaterialCommunityIcons name="pencil" size={16} color="black" />
              <Text style={{paddingLeft:8, color:'#000000', fontWeight:'600'}}>
              Edit Profile
              </Text>
             </Pressable>
            <Pressable style={styles.btn}>
            <MaterialIcons name="logout" size={16} color="black" />
            </Pressable>
          </View>

          <View style={styles.details}>
            <View style={{flexDirection:'row', alignItems:'center', marginVertical:3}}>
            <Entypo
          name="graduation-cap"
          size={18}
          color="gray"
          style={{ width: 25 }}
        />
              <Text style={{paddingLeft:2, fontWeight:'400',fontSize:15,}}>
              Software Developer
              </Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', marginVertical:3}}>
            <Ionicons name="time" size={18} color="gray" style={{ width: 25 }} />
              <Text style={{paddingLeft:2, fontWeight:'400',fontSize:15,}}>
               Joined October 2020
              </Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', marginVertical:3}}>
            <Entypo
          name="location-pin"
          size={18}
          color="gray"
          style={{ width: 25 }}
        />
              <Text style={{paddingLeft:2, fontWeight:'400',fontSize:15,}}>
               Banglore, India
              </Text>
            </View>
          </View>

        </View>
      
    </View>
  )
}

const ProfileScreen = () => {
  return(
    <FlatList
    data={user.posts}
    renderItem={({ item }) => <FeedPost post={item} />}
    showsVerticalScrollIndicator={false}
    ListHeaderComponent={() => (
      <View style={styles.mainContainer}>
        <ProfileScreenHeader user={user} isMe={true} />
        <Text style={styles.sectionTitle}>Posts</Text>
      </View>
    )}
  />

  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  mainContainer:{
    margin:0,
    padding:0,
    // flex:1,

  },
  container:{
    padding:10,
    
  },
  sectionTitle: {
    marginLeft: 10,
    marginVertical: 5,
    fontWeight: "500",
    fontSize: 18,
  },
  header:{
    width:'100%',
    height:300,
    position:'relative',
    alignItems:'center',
  },
    bgImage:{
        width:'100%',
        height:200,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
 
    },
    profileImg:{
      width:140,
      height:140,
      borderRadius:100,
      borderColor:'#ffffff',
      borderWidth:5,
  },
  headerProfile:{
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    bottom:0,

  },
  name:{
    fontWeight:'500',
    fontSize:18,
  },
  userDetails:{
    marginHorizontal:10,

  },
  btns:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomColor:'#cccccc',
    borderBottomWidth:0.2,
    paddingBottom:12,
  },
  btn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:22,
    paddingVertical:12,
    borderRadius:10,
    backgroundColor:'#ffffff',

  }, 
  details:{
    marginVertical:10,
  }

})