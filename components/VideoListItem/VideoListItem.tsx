import React from 'react'
import {View, Text, Image, Pressable} from "react-native"
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type VideoListItemProps={
video: {
    id:string;
    createdAt:string;
    title:string;
    thumbnail:string;
    videoUrl:string;
    duration:number;
    views:number;
    user:{
        name:string;
        image?:string;
    }
}
}
export default function VideoListItem(props: VideoListItemProps) {
    const {video} = props
    const minute = Math.floor(video.duration/60);
    const seconds = video.duration % 60;

    // let viewsString = video.views.toString();
    // if(video.views > 1_000_000){
    //     viewsString = (video.views / 1_000_000).toFixed(2) + "m";
    // }else if(video.views > 1_000){
    //     viewsString = (video.views / 1_000).toFixed(2) + "k"
    // }
    const navigation = useNavigation();

    const openVideoPage=()=>{
        navigation.navigate("VideoScreen")
    }
    return (
        <Pressable onPress={openVideoPage}>
            
                <View style={styles.videoCard}>
                    <Image style={styles.thumbnail} 
                    source={{uri:video.thumbnail}}/>
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>
                            {minute}:{seconds < 10 ? "0":""}{seconds}
                        </Text>
                    </View>
                </View>
                <View style={styles.titleRow}>
                    <Image style={styles.avatar} 
                    source={{uri:video.user.image}}/>
                    <View style={styles.middleContainer}>
                        <Text style={styles.title}>{video.title}</Text>
                        <Text style={styles.subTitle}>{video.user.name} {video.views} {video.createdAt}</Text>
                    </View>
                    <Entypo name="dots-three-vertical" size={15} color="white" />
                </View>

        </Pressable>
    )
}


