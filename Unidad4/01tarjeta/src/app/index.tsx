import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('../../assets/images/david.jpg')} 
          style={styles.image} 
         />
        <Text style={styles.title}>Desarrollo de Interfaces</Text>
        <Text style={styles.subtitle}>Antonio Jesús</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16, // Borde redondeado por las esquinas tal y como pide el PDF
    borderWidth: 2, // Grosor del borde de la tarjeta
    borderColor: '#333333', // Color del borde de la tarjeta
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12,
    // Al poner la mitad exacta del width y height (50), la imagen queda completamente circular 
    // como en el ejemplo visual del PDF.
    borderRadius: 50, 
    borderWidth: 1, // Borde opcional para la imagen
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});