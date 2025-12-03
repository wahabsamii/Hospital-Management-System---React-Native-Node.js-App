import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import {launchImageLibrary} from 'react-native-image-picker'
const AddPharmacy = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePickImage = () => {
    launchImageLibrary({mediaType:'photo'}, (response) => {
        if (!response.didCancel && !response.errorCode) {
            const asset = response.assets[0];
            setImage(asset)
        }
    })
  }

//   const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("quantity", quantity);
//     formData.append("image", {
//         uri: image.uri,
//         name: image.fileName || 'photo.jpg', // ✅ corrected
//         type: image.type
//       });

 const handleSubmit = async () => {
  if (!name || !image || !description || !price || !quantity) {
    Alert.alert('Error', 'Please fill in all fields.');
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("image", {
    uri: image.uri,
    name: image.fileName || 'photo.jpg',
    type: image.type
  });

  try {
    const response = await axios.post('http://192.168.0.156:9000/api/pharmacy/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.data.success) {
      Alert.alert('Success', 'Pharmacy item added!');
      setName('');
      setImage(null);
      setDescription('');
      setPrice('');
      setQuantity('');
    }
  } catch (error) {
    console.log("AXIOS ERROR:", error.response?.data || error.message);
    Alert.alert('Error', 'Failed to add item.');
  }
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Pharmacy Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Medicine Name"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity onPress={handlePickImage} style={{backgroundColor:'blue', padding:10, marginBottom:10}}>
        <Text>Pick Image</Text>
      </TouchableOpacity>
      {image && <Image source={{uri:image.uri}} width={100} height={100}/>}

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Button title="Upload Item" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});

export default AddPharmacy;
