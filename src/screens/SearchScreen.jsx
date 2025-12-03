// SearchResultsScreen.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const SearchScreen = ({ route }) => {
  const searchQuery  = route?.params?.searchQuery || '';
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const fetchAllProducts = async () => {
      try {
          const res = await axios.get('https://rms-backend-plum.vercel.app/api/pharmacy/all');
          setProducts(res.data.items);
      } catch (error) {
          console.log(error.message);
      }
  }
  useEffect(() => {
    fetchAllProducts();
  }, [])
  useEffect(() => {
    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filtered);
  }, [searchQuery, products]);

  const filtered = products.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <View style={styles.container}>
         <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.navigate('Landing')}><Icon2 style={{fontSize:23}}  name="arrow-back-ios-new"/></TouchableOpacity>
                 <Text style={styles.title}>Results for "{searchQuery}"</Text>
                 <Text></Text>
         </View>
    <FlatList data={results} showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <TouchableOpacity style={styles.card}>
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
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 18, marginBottom: 10, fontFamily:'Poppins-SemiBold', textAlign:'center', marginTop:'30' },
  resultItem: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
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
},
top:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  title:{
    fontSize:22,
    textAlign:'center',
    fontFamily:'Poppins-SemiBold',
    // marginBottom:20
    marginTop:10
},
});
