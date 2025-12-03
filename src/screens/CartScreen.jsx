import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const cartItems = useSelector((state) => state?.cart?.cartItems); // update based on your slice

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={1}>{item.description}</Text>
        <Text style={styles.price}>${item.price} x {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    color: '#407CE2',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily:"Poppins-Bold"
  },
  list: {
    paddingBottom: 120,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
//     fontWeight: 'bold',
    fontFamily:'Poppins-SemiBold',
    color: '#333',
  },
  description: {
    fontSize: 13,
    color: '#666',
//     marginVertical: 4,
    fontFamily:'Poppins-Regular'
  },
  price: {
    color: '#407CE2',
//     fontWeight: '600',
    fontFamily:'Poppins-Bold',
    marginTop:4
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  total: {
    fontSize: 18,
    fontFamily:'Poppins-Bold',
    marginBottom: 10,

  },
  checkoutButton: {
    backgroundColor: '#407CE2',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
//     fontWeight: 'bold',
fontFamily:'Poppins-Bold'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});

export default CartScreen;
