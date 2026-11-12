import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// Interfaz para las props del componente CustomButton
interface CustomButtonProps {
  text: string;
}

// Componente reutilizable con Pressable que acepta el texto como parámetro de entrada
function CustomButton({ text }: CustomButtonProps) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

// Componente principal Index donde se reutiliza CustomButton cuatro veces
export default function Index() {
  return (
    <View style={styles.container}>
      <CustomButton text="Primer Botón" />
      <CustomButton text="Segundo Botón" />
      <CustomButton text="Tercer Botón" />
      <CustomButton text="Cuarto Botón" />
    </View>
  );
}

// Estilos definidos con StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

