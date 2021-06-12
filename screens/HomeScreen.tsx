import React from 'react'
import {View, FlatList} from "react-native"
import VideoListItem from '../components/VideoListItem'
import videoitems from '../assets/data/videos.json';


export default function HomeScreen() {
    return (
        <View>
            <FlatList
                data={videoitems}
                renderItem={({item})=><VideoListItem video={item}/>}
            />
        </View>
    )
}


