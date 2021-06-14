import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, } from 'react-native';
import comments from '../../assets/data/comments.json'
import VideoComment from '../VideoComment';
import {FlatList} from 'react-native-gesture-handler';
const VideoComments = () => {
    return (
        <View style={styles.commentContainer}>
            <FlatList
                data={comments}
                renderItem={({item})=><VideoComment comment={item}/>}
            />
        </View>
    )
}

export default VideoComments;

const styles = StyleSheet.create({
    commentContainer:{
        backgroundColor:"#1f1e1e",
        flex:1,
    }
})