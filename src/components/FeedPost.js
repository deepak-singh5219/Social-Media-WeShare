import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import LikeImage from "../../assets/images/like.png";
import {
    Entypo,
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
import { useState } from 'react';  

const FeedPost = ({post}) => {
    
    const [isLiked,setIsLiked] = useState(false);

  return (
    <View style = {styles.post}>
      
      {/* header  */}
      <View style = {styles.header}>
      <Image
    source={{uri: post.User.image}}
    style={styles.profileImage}
  />
       <View style={styles.details}>
        <Text style={styles.name}>{post.User.name}</Text>
        <Text style={styles.subtitle}>{post.createdAt}</Text>
       </View>

       <Entypo
    name="dots-three-horizontal"
    size={18}
    color="gray"
    style={styles.icon}
  />

      </View>
      {/* body  */}
      <View style={styles.body}>

        <Text style={styles.description}>{post.description}</Text>
        <Image
        source={{uri:post.image}}
        style={styles.image}
        />

      </View>

      {/* Footer  */}
      <View style={styles.footer}>
        <View style={styles.statsRow}>

        <Image source={LikeImage} style={styles.likeIcon} />
    <Text style={styles.likedBy}>
      Elon Musk and {post.numberOfLikes} others
    </Text>

    <Text style={styles.shares}>{post.numberOfShares} shares</Text>

        </View>

        <View style={styles.buttonsRow}>

            <View style={styles.btn}>
            <AntDesign name="like2" 
            size={18} 
            color={isLiked? "royalblue" : "gray" }
            />
                <Text style={
                    [
                        styles.btnText,
                        {color: isLiked? "royalblue":"gray"},
                    ]
                }>Like</Text>
            </View>
            <View style={styles.btn}>
            <FontAwesome5 name="comment-alt" size={14} color="gray" />
                <Text style={styles.btnText}>Comment</Text>
            </View>
            <View style={styles.btn}>
            <MaterialCommunityIcons
            name="share-outline"
            size={20}
            color="gray"
            />
                <Text style={styles.btnText}>Share</Text>
            </View>

        </View>

      </View>
    
    </View>
  )
}

export default FeedPost;

const styles = StyleSheet.create({
    post:{
        // padding:20,
        width:'100%',
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        widht:'100%',
        paddingLeft:15,
        paddingRight:15,
    },
    details:{
        marginLeft:10,
    },

    description:{
        padding:20,
        lineHeight:20,
        letterSpacing:0.5,

    },
    body:{

    },
    footer:{
        padding:15,

    },
    statsRow:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        paddingBottom:10,
    },
    buttonsRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:15,
    },
    image:{
        width:'100%',
        aspectRatio:1,
    },
    name:{
        fontWeight:'bold',
        fontSize:15,

    },
    shares:{
        marginLeft:'auto',
        color:'gray',
    },

    subtitle:{
    color:'gray',
    fontSize:12,
    },
    profileImage:{
        width: 40,
        height: 40,
        borderRadius:25,
    },
    icon:{
        marginLeft: "auto",
    },
    likeIcon:{
        width:20,
        height:20,
        marginRight:5,
    },
    likedBy:{
        color:'gray',
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
    },
    btnText:{
        color:'gray',
        marginLeft:5,
    }
})