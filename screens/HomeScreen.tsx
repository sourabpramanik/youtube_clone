import React from 'react'
import {View, FlatList} from "react-native"
import VideoListItem from '../components/VideoListItem'
import { DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';
import {Video} from '../src/models'

export default function HomeScreen() {
    const [videos, setVideos] = useState<Video[]>([])

    useEffect(()=>{
        //fetch Videos
       DataStore.query(Video).then(setVideos)
    }, [videos])

    return (
        <View>
            <FlatList
                data={videos}
                renderItem={({item})=><VideoListItem video={item}/>}
            />
        </View>
    )
}


