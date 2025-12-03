import { View, Text, StyleSheet, FlatList, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';
const PoppularProduct = () => {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get('https://rms-backend-plum.vercel.app/api/pharmacy/all');
            setProducts(res.data.items);
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
      fetchAllProducts();
    }, [products])
    

  return (
    <View style={styles.main}>
        <View style={styles.topCol}>
        <Text style={styles.title}>Poppular Product</Text>
        <Text style={styles.left}>See all</Text>
        </View>
      <View>
        <FlatList horizontal data={products} showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {product: item})} style={styles.card}>
                <View><Image source={{uri: item.image}} width={100} height={100}/></View>
                <View>
                    <Text style={{fontFamily:'Poppins-SemiBold'}}>{item.name}</Text>
                    <Text style={{fontFamily:'Poppins-Regular'}}>{item.quantity}ml</Text>
                    <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontFamily:'Poppins-Bold'}}>$ {item.price}</Text>
                        <TouchableOpacity onPress={() => dispatch(addToCart(item))}><Icon style={styles.PlusIcon} name="plussquare"></Icon></TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
            }
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontFamily:'Poppins-SemiBold'
    },
    main:{
        marginTop:20
    },
    card:{
        borderWidth:1,
        borderColor:'lightgray',
        padding:10,
        borderRadius:10,
        marginRight:10,
        marginTop:5,
        backgroundColor:'white'
    },
    left:{
        color:'#407CE2',
        fontFamily:'Poppins-Regular'
    },
    topCol:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    PlusIcon:{
        color:'#407CE2',
        fontSize:25
    }
})
export default PoppularProduct