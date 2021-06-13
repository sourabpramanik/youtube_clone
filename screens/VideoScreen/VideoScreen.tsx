import React from 'react'
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import video from '../../assets/data/video.json'
import styles from "./styles"
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import VideoListItem from '../../components/VideoListItem'
import videoitems from '../../assets/data/videos.json';

function VideoScreen() {
    return (
        <View style={{backgroundColor:"#141414", flex:1}}>
            {/* Video Info */}
             <View style={styles.videoInfo}>
                <Text style={styles.tags}>{video.tags}</Text>
                <Text style={styles.title}>{video.title}</Text>
                <Text style={styles.subTitle}>{video.user.name} {video.views} {video.createdAt}</Text>
            </View>
            {/* Action Buttons */}
            <View style={styles.actionListContainer}>
                <ScrollView horizontal >
                    <View style={styles.actionListItem}>
                        <AntDesign name="like1" size={20} color="lightgrey" />
                        <Text style={styles.actionText}>{video.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <AntDesign name="dislike2" size={20} color="lightgrey" />
                        <Text style={styles.actionText}>{video.dislikes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <MaterialIcons name="online-prediction" size={24} color="lightgrey" />
                        <Text style={styles.actionText}>live</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <AntDesign name="sharealt" size={20} color="lightgrey" />
                        <Text style={styles.actionText}>share</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <AntDesign name="clouddownload" size={20} color="lightgrey" />
                        <Text style={styles.actionText}>download</Text>
                    </View>
                    <View style={styles.actionListItem}>
                    <Ionicons name="add-circle" size={20} color="lightgrey" />
                        <Text style={styles.actionText}>save</Text>
                    </View>
                </ScrollView>
            </View>
            {/* Youtuber's Details */}
            <View style={styles.userContainer}>
                <Image source={{uri: video.user.image}} style={styles.avatar}/>
                <View style={styles.userDetails}>
                    <Text style={styles.name}>{video.user.name}</Text>
                    <Text style={styles.subscribers}>{video.user.subscribers} subscribers</Text>
                </View>
                <Text style={styles.subscribe}>Subscribe</Text>
            </View>
            {/* Comment Section */}
            <View style={styles.commentSection}>
                <Text style={styles.commentTitle}>Comments 333</Text>
                <View style={styles.userCommentContainer}>
                    <Image source={{uri: video.user.image}} style={styles.userAvatar}/>                    
                    <Text style={styles.comment}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.                         
                    </Text>
                </View>
            </View>
             
        </View>
    )
}

const VideoScreenWithRecommendations=()=>{
    return(
        <SafeAreaView style={{backgroundColor:"#141414", flex:1}}>
            {/* Video Area */}
            <Image style={styles.videoPlayer} source={{uri:video.thumbnail}}/>
            {/*Recommended Videos  */}
            <FlatList
                data={videoitems}
                renderItem={({item})=><VideoListItem video={item}/>}
                ListHeaderComponent={VideoScreen}
            />
        </SafeAreaView> 
    )
}
export default VideoScreenWithRecommendations