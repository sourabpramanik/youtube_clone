import React from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import video from '../../assets/data/video.json'

export default function ActionComponents() {
    return (
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
    )
}

const styles = StyleSheet.create({

    actionListContainer:{
        marginVertical: 10,
     },
     actionListItem:{
        justifyContent:"space-around",
        alignItems:"center",
        height: 60,
        width: 70,
     },
     actionText:{
         color: "#fff",
     },
})