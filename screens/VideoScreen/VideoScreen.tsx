import React, {useCallback, useMemo, useRef} from 'react'
import { View, Text, Image, SafeAreaView, FlatList, Pressable } from 'react-native'
import video from '../../assets/data/video.json'
import comments from '../../assets/data/comments.json'
import styles from "./styles"
import VideoListItem from '../../components/VideoListItem'
import videoitems from '../../assets/data/videos.json';
import ActionComponents from '../../components/VideoScreen/ActionComponents'
import VideoPlayer from '../../components/VideoScreen/VideoPlayer'
import BottomSheet, { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet'
import VideoComment from '../../components/VideoComment'
import VideoComments from '../../components/VideoComments'

function VideoScreen() {
    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['25%', '100%'], []);

    const handlePresentModalPress = useCallback(() => {
        commentsSheetRef.current?.present();
      }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
      }, []);
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
                <Pressable onPress={handlePresentModalPress} style={styles.commentSection}>
                    <Text style={styles.commentTitle}>Comments 333</Text>
                    {/* <VideoComment id={comments}/> */}
                </Pressable>
                <BottomSheetModal 
                ref={commentsSheetRef} 
                snapPoints={snapPoints} 
                index={1} 
                onChange={handleSheetChanges}
                backgroundComponent={({style})=><View style={[style,{backgroundColor:"#1f1e1e"}]}/>}
                >
                    <VideoComments/>
                </BottomSheetModal>
                
        </View>
    )
}

const VideoScreenWithRecommendations=()=>{
    return(
        <SafeAreaView style={{backgroundColor:"#141414", flex:1}}>
            {/* Video Area */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail}/>
            
            {/*Recommended Videos  */}
            <View style={{flex:1}}>
                <BottomSheetModalProvider>
                    <FlatList
                        data={videoitems}
                        renderItem={({item})=><VideoListItem video={item}/>}
                        ListHeaderComponent={VideoScreen}
                    />
                    {/* all comments */}
                </BottomSheetModalProvider>
                
                
            </View>
            
            
        </SafeAreaView> 
    )
}
export default VideoScreenWithRecommendations