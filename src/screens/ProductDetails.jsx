import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';
const ProductDetails = ({route}) => {
  const {product} = route.params;
  const [expandText, setExpandText] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log('here its', cartItems);
  // console.log('our', product);
  // console.log('cartId', cartItems.map((item)=> (item._id) === product._id));
  // console.log('pId', product._id);
  const filterItem = cartItems.find((item)=> (item._id) === product._id);
  // console.log(filterItem?.quantity)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Icon style={{fontSize:23}}  name="arrow-back-ios-new"/></TouchableOpacity>
          <Text style={styles.title}>Pharmacy</Text>
          <Text></Text>
      </View>
      <View>
        <Image source={{uri: product.image}}  height={300}/>
        <Text style={{fontFamily:'Poppins-Bold', fontSize:20, marginTop:20}}>{product.name}</Text>
        <Text style={{fontFamily:'Poppins-Regular', color:'gray'}}>{product.quantity} ml</Text>
        <View style={styles.outerr}>
          <View style={{display:'flex', flexDirection:'row'}}>
            <View style={{ width:'50%', display:'flex', flexDirection:'row', alignItems:'center', gap:20}}>
                <TouchableOpacity><Text style={{fontSize:30, color:'black'}}>-</Text></TouchableOpacity>
                <Text style={{fontSize:20, fontFamily:'Poppins-Regular', marginTop:10}}> {filterItem?.quantity} </Text>
                <TouchableOpacity onPress={() => dispatch(addToCart(product))} style={styles.plus}><Text style={{fontSize:20, color:'white'}}>+</Text></TouchableOpacity></View>
            </View>
          <View><Text style={{fontFamily:'Poppins-Bold', fontSize:20}}>$ {product.price}</Text></View>
        </View>

        <Text style={{fontFamily:'Poppins-Bold', fontSize:18, marginTop:20}}>Description</Text>
        <Text style={{fontFamily:'Poppins-Regular', color:'gray'}} numberOfLines={expandText ? 7 : 5}>{product.description}</Text>
        <TouchableOpacity><Text style={{fontFamily:'Poppins-Regular', color:'#407CE2'}} onPress={() => setExpandText(!expandText)}>{expandText ? 'Read Less' : 'Read More'}</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buyBtn}>
        <Text style={{color:'white', fontFamily:'Poppins-SemiBold', textAlign:'center'}}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
    padding:30,
    backgroundColor:'white',
    height:'100%'
  },
  title:{
    fontSize:22,
    fontFamily:'Poppins-Bold',
    textAlign:'center'
  },
  outerr:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  buyBtn:{
    backgroundColor:'#407CE2',
    padding:15,
    borderRadius:100,
    marginTop:20
  },
  top:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  plus:{
    backgroundColor:'#407CE2',
    width:40,
    height:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  }
})
export default ProductDetails