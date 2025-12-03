import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

export default function AddDoctorScreen() {
  const [doctor, setDoctor] = useState({
    name: '',
    specialty: '',
    address: '',
    description: '',
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (key, value) => {
    setDoctor({ ...doctor, [key]: value });
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.errorCode) {
        const asset = response.assets[0];
        setImage(asset);
      }
    });
  };

  const handleSubmit = async () => {
    if (!doctor.name || !doctor.specialty || !doctor.address || !doctor.description || !image) {
      Alert.alert('Error', 'Please fill all fields and select an image.');
      return;
    }

    const formData = new FormData();
    Object.entries(doctor).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('image', {
      uri: image.uri,
      name: image.fileName || 'photo.jpg',
      type: image.type,
    });

    try {
      const res = await axios.post('http://192.168.0.156:9000/api/doctors/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Alert.alert('Success', 'Doctor added successfully!');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Failed to add doctor.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={doctor.name} onChangeText={(text) => handleInputChange('name', text)} />

      <Text style={styles.label}>Specialty</Text>
      <TextInput style={styles.input} value={doctor.specialty} onChangeText={(text) => handleInputChange('specialty', text)} />

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} value={doctor.address} onChangeText={(text) => handleInputChange('address', text)} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={doctor.description} onChangeText={(text) => handleInputChange('description', text)} multiline />

      <Button title="Pick Image" onPress={handleImagePick} />
      {image && <Image source={{ uri: image.uri }} style={styles.image} />}

      <Button title="Submit" onPress={handleSubmit} color="#007BFF" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 8,
  },
});
