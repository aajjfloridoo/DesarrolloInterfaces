import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Persona } from "../Models/Entities/Persona";
import { PersonasViewModel } from "../ViewModels/PersonasViewModel";

const viewModel = new PersonasViewModel();

export default function Index() {
  const renderItem = ({ item }: { item: Persona }) => (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => viewModel.seleccionarPersona(item)}
    >
      <Text style={styles.cardText}>
        {item.nombre} {item.apellidos}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Personas</Text>
      <FlatList
        data={viewModel.personas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.7,
    backgroundColor: "#e8edf5",
  },
  cardText: {
    fontSize: 16,
    color: "#2c3e50",
    fontWeight: "500",
  },
});


