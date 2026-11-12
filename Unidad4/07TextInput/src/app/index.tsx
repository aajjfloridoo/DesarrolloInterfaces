import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';

export default function Index() {
  // 1. Declaración de los estados
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false);

  // 2. Función que maneja la pulsación del botón
  const iniciarCarga = () => {
    setCargando(true); // Muestra el ActivityIndicator
    setExito(false);   // Oculta el mensaje de éxito si estuviera visible de antes

    // 3. Temporizador de 2 segundos (2000 milisegundos)
    setTimeout(() => {
      setCargando(false); // Oculta el ActivityIndicator
      setExito(true);     // Muestra el mensaje de éxito
    }, 2000);
  };

  return (
    <View style={styles.container}>
      
      {/* 4. Botón Pressable con icono */}
      <Pressable style={styles.button} onPress={iniciarCarga} disabled={cargando}>
        <Text style={styles.buttonIcon}>↻</Text>
        <Text style={styles.buttonText}>Recargar</Text>
      </Pressable>

      {/* 5. Renderizado condicional del ActivityIndicator */}
      {cargando && (
        <ActivityIndicator size="large" color="#007AFF" style={styles.indicador} />
      )}

      {/* 6. Renderizado condicional del mensaje de éxito */}
      {exito && !cargando && (
        <Text style={styles.textoExito}>Cargado con éxito</Text>
      )}

    </View>
  );
}

// 7. Estilos de la interfaz
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  buttonIcon: {
    color: 'white',
    fontSize: 24,
  },
  indicador: {
    marginTop: 20,
  },
  textoExito: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745', // Color verde para indicar éxito
  },
});