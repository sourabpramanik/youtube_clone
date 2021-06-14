import { Video } from 'expo-av'
import React from 'react'
import { useRef } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
interface VideoPlayerProps{
    videoURI: string;
    thumbnailURI: string;
}
const VideoPlayer = (props: VideoPlayerProps) => {
    const {videoURI, thumbnailURI} = props

    // const videoRef = useRef<Video>(null)
    // const onRefAssign =(videoElement)=>{
    //     const playbackObject = videoElement;

    //     const source = {uri:videoURI}
    //     const initialStatus = {uri:videoURI}
    //     playbackObject.loadAsync();
    // }


    return (
        <View>
            <Video 
                source = {{uri:videoURI}}
                style={styles.videoPlayer}
                posterSource = {{uri:thumbnailURI}}
                posterStyle = {{
                    resizeMode:"cover"
                }}
                resizeMode="contain"
                usePoster={false}
                useNativeControls={true}
                shouldPlay={true}
            />
        </View>
    )
}

export default VideoPlayer
