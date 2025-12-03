import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Search = () => {
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    if (!query.trim()) return;
    navigation.navigate('SearchResults', { searchQuery: query });
  };
  return (
    <View style={styles.main}>
      <Icon name="search" style={{fontSize:18, color:'gray'}}/>
      <TextInput value={query} onChangeText={setQuery} returnKeyType='search' onSubmitEditing={handleSearch} style={{ width:'96%',marginTop:4, fontFamily:'Poppins-Regular'}} placeholder='Search doctor, drugs, articles...'/>
      
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        borderWidth:1,
        borderColor:'lightgray',
        borderRadius:200,
        paddingHorizontal:20,
        fontFamily:"Poppins-Regular",
        flexDirection:'row',
        alignItems:'center',
        gap:6,
        paddingVertical:3
    }
})
export default Search