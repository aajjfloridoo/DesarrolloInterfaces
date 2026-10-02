import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      
      {/* 1. HEADER */}
      <View style={styles.header}>
        <Text style={styles.text}>HEADER</Text>
      </View>

      {/* 2. SECCIÓN CENTRAL (Fila que contiene 3 columnas) */}
      <View style={styles.middleSection}>
        
        {/* Barra lateral izquierda */}
        <View style={styles.leftSidebar} />

        {/* Contenido principal */}
        <View style={styles.content}>
          <Text style={styles.textContent}>CONTENT</Text>
        </View>

        {/* Barra lateral derecha */}
        <View style={styles.rightSidebar} />

      </View>

      {/* 3. FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.text}>FOOTER</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Disposición principal en vertical
  },
  header: {
    height: 60,
    backgroundColor: '#00FFFF', // Cyan
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 1, // Ocupa todo el espacio entre el header y el footer
    flexDirection: 'row', // Disposición en horizontal para las barras y el contenido
  },
  leftSidebar: {
    width: 50,
    backgroundColor: '#0000FF', // Azul
  },
  content: {
    flex: 1, // Ocupa todo el espacio horizontal sobrante entre las dos barras
    backgroundColor: '#808080', // Gris
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSidebar: {
    width: 50,
    backgroundColor: '#008000', // Verde
  },
  footer: {
    height: 50,
    backgroundColor: '#FFC0CB', // Rosa
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#666666',
    fontWeight: 'bold',
  },
  textContent: {
    color: '#4B0082', // Color morado/oscuro para el texto central
    fontWeight: 'bold',
    fontSize: 18,
  }
});