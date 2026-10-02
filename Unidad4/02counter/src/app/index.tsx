import React, { useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Index = () => {
  // Estado para el número mostrado en pantalla
  const [count, setCount] = useState(0);
  // Estado adicional para llevar el conteo total de clics (incrementos y decrementos mezclados)
  const [totalClicks, setTotalClicks] = useState(0);

  const handlePress = (isIncrement: boolean) => {
    // 1. Calculamos los nuevos valores en variables locales (esto arregla el problema del alert)
    const newCount = isIncrement ? count + 1 : count - 1;
    const newTotalClicks = totalClicks + 1;

    // 2. Actualizamos los estados
    setCount(newCount);
    setTotalClicks(newTotalClicks);

    // 3. Comprobamos la variable local para que sea instantáneo
    if (newTotalClicks % 10 === 0) {
      alert(`Enhorabuena, llevas ${newTotalClicks} clicks`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {count}
      </Text>
      
      {/* Botón de Incrementar */}
      <Pressable onPress={() => handlePress(true)} style={styles.button}>
        <Text style={styles.buttonText}>Incrementar</Text>
        <Ionicons name="add-circle" size={24} color="white" />
      </Pressable>

      {/* Botón añadido para Decrementar */}
      <Pressable onPress={() => handlePress(false)} style={[styles.button, styles.buttonDecrement]}>
        <Text style={styles.buttonText}>Decrementar</Text>
        <Ionicons name="remove-circle" size={24} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10, // Añadido un margen para separar los botones
  },
  buttonDecrement: {
    backgroundColor: '#d32f2f', // Color rojo para diferenciar el decremento
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  }
});

export default Index;