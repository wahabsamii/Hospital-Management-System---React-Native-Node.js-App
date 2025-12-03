import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto'
import { useDispatch } from 'react-redux'
import { addLike } from '../redux/like/likeSlice'
const HealthArticles = () => {
  const dispatch = useDispatch();
  const articles = [
    {
      title: "The Importance of Mental Health in Modern Life",
      description:
        "Mental health is just as vital as physical health. Learn how daily mindfulness, therapy, and self-care can improve emotional well-being.",
      image: "https://st3.depositphotos.com/6747796/15289/i/450/depositphotos_152894040-stock-photo-blur-of-patient-admit-in.jpg",
      dateCreated: "2025-05-02",
      readTime: "4 min"
    },
    {
      title: "5 Natural Ways to Boost Your Immune System",
      description:
        "Discover simple and natural methods to strengthen your immune system through diet, sleep, and physical activity.",
      image: "https://example.com/images/immune-system.jpg",
      dateCreated: "2025-04-27",
      readTime: "3 min"
    },
    {
      title: "Understanding Heart Disease: Causes and Prevention",
      description:
        "Heart disease remains a leading cause of death globally. This article explores major causes and how you can reduce your risk.",
      image: "https://st3.depositphotos.com/6747796/15289/i/450/depositphotos_152894040-stock-photo-blur-of-patient-admit-in.jpg",
      dateCreated: "2025-04-20",
      readTime: "5 min"
    },
    {
      title: "Telemedicine: The Future of Healthcare Access",
      description:
        "Explore how telemedicine is transforming healthcare delivery, making it more accessible, efficient, and safe.",
      image: "https://example.com/images/telemedicine.jpg",
      dateCreated: "2025-04-18",
      readTime: "6 min"
    },
    {
      title: "Healthy Eating: Building a Balanced Plate",
      description:
        "A balanced diet can reduce your risk of chronic disease and promote overall health. Here’s how to build healthy meals.",
      image: "https://example.com/images/healthy-eating.jpg",
      dateCreated: "2025-04-15",
      readTime: "4 min"
    }
  ];
  
  return (
    <View style={styles.main}>
      <Text style={{fontFamily:'Poppins-SemiBold', fontSize:20}}>Health Articles</Text>
      <FlatList data={articles} renderItem={({item}) => <View style={styles.card}>
        <Image source={{uri:item.image}} width={100} height={100} style={{borderRadius:10}}/>
        <View style={{ width:'60%'}}>
          <Text style={{fontFamily:'Poppins-SemiBold', fontSize:14, width:'96%'}}>{item.title}</Text>
          <Text style={{fontFamily:'Poppins-Regular', color:'gray'}}>{item.dateCreated}   {item.readTime}</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(addLike(item))}>
          <Icon style={{fontSize:28, marginTop: -50}} name="favorite"></Icon>
        </TouchableOpacity>
      </View>}/>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        marginTop:30
    },
    card:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      borderWidth:1,
      borderColor:'lightgray',
      marginBottom:10,
      padding:10,
      borderRadius:10,
      width:'100%'
    }
})
export default HealthArticles