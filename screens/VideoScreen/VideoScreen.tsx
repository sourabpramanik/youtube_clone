import React from 'react'
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'
import video from '../../assets/data/video.json'
import styles from "./styles"
import VideoListItem from '../../components/VideoListItem'
import videoitems from '../../assets/data/videos.json';
import ActionComponents from '../../components/VideoScreen/ActionComponents'
import VideoPlayer from '../../components/VideoScreen/VideoPlayer'
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
           <ActionComponents/>
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
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
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