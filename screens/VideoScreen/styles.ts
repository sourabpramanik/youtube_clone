import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    videoPlayer:{
        width:"100%",
        aspectRatio:16/9,
    },
    videoInfo:{
        margin:10,
    
    },
    tags:{
        color: "#0094e3",
        fontSize:14,
        fontWeight:'500'
    },
    title:{
        color: "#fff",
        fontSize:15,
        fontWeight:'500',
        marginVertical: 10,
    },
    subTitle:{
        color: "grey",
        fontSize:12,
        fontWeight:'500'
    },
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
    userContainer:{
        flexDirection:"row",
        alignItems:"center",
        borderColor:"#3d3d3d",
        borderTopWidth:1,
        borderBottomWidth:1,
        paddingVertical:10, 
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius:25,
    },
    userDetails:{
        flex: 1,
        marginHorizontal: 10,

    },
    name:{
        color: "#fff",
        fontSize:15,
        fontWeight:'bold'
    },
    subscribers:{
        color: "lightgrey",
        fontSize:12,
        fontWeight:'500'
    },
    subscribe:{
        color: "red",
        fontSize:15,
        fontWeight:'bold',
        padding:10,
    },
    // Comment Section
    commentSection:{
        paddingHorizontal: 10,
        marginVertical:5,
        
    },
    commentTitle:{
        color: "#fff",
        fontSize:15,
    },
    userCommentContainer:{
        flexDirection:"row",
        alignItems:"center",
        padding:10, 
        marginVertical: 10,
    },
    userAvatar:{
        width: 40,
        height: 40,
        borderRadius:20,
    },
    comment:{
        color: "#fff",
        marginLeft:10,
    },
})
export default styles;