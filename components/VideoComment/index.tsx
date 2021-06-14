import React from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from "react-native";
import video from '../../assets/data/video.json'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

interface VideoCommentProps{
    comment:{
        id: string;
        createdAt:string;
        comment: string;
        likes:number;
        dislikes:number;
        replies:number;
        user:{
            name: string;
            image:string;
        }
    }
}
const VideoComment = (props: VideoCommentProps) => {
    const {comment} = props;
    return (
        <View style={styles.userCommentContainer}>
            <Image source={{uri: comment.user.image}} style={styles.userAvatar}/>
            <View style={styles.commentWrapper}>
                <Text style={styles.userDetails}>{comment.user.name} {comment.createdAt}</Text>
                <Text style={styles.comment}>
                    {comment.comment}                         
                </Text>
                <View style={styles.actionListContainer}>
                    <View style={styles.actionListItem}>
                        <AntDesign name="like1" size={15} color="white" />
                        <Text style={styles.actionText}>{comment.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <AntDesign name="dislike2" size={15} color="white" />
                        <Text style={styles.actionText}>{comment.dislikes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <MaterialIcons name="message" size={15} color="white" />
                        <Text style={styles.actionText}>{comment.replies}</Text>
                    </View>
                </View>
                
            </View>                    
            
        </View>
    )
}

export default VideoComment

const styles = StyleSheet.create({
    userCommentContainer:{
        flexDirection:"row",
        padding:10, 
        borderColor:"#3d3d3d",
        borderTopWidth:1,
    },
    userAvatar:{
        width: 40,
        height: 40,
        borderRadius:20,
    },
    commentWrapper:{
        marginHorizontal:5,
    },
    userDetails:{
        color: "#777575",
        fontSize:11,
        marginLeft:10,

    },
    comment:{
        color: "#fff",
        marginLeft:10,
    },
    actionListContainer:{
        flexDirection:'row'
     },
     actionListItem:{
        alignItems:"center",
        height: 60,
        width: 70,
        flexDirection:"row",
        
     },
     actionText:{
         color: "#fff",
         marginHorizontal:3,
     },
})