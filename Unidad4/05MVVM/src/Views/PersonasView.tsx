import React, { useMemo } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Persona } from "../Models/Entities/Persona";
import { PersonasViewModel } from "../ViewModels/PersonasViewModel";

interface PersonasViewProps {
  viewModel?: PersonasViewModel;
}

export const PersonasView: React.FC<PersonasViewProps> = ({
  viewModel: customViewModel,
}) => {
  // Instanciamos el ViewModel si no viene por props
  const viewModel = useMemo(
    () => customViewModel ?? new PersonasViewModel(),
    [customViewModel]
  );

  const renderItem = ({ item }: { item: Persona }) => (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => viewModel.seleccionarPersona(item)}
    >
      <View style={styles.cardHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {item.nombre.charAt(0)}
            {item.apellidos.charAt(0)}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.nombreText}>
            {item.nombre} {item.apellidos}
          </Text>
          <Text style={styles.idText}>ID: {item.id}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f7fb" />
      <View style={styles.container}>
        <Text style={styles.title}>Listado de Personas (MVVM)</Text>
        <Text style={styles.subtitle}>
          Pulsa sobre una persona para ver sus datos
        </Text>

        <FlatList
          data={viewModel.personas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e293b",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#64748b",
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  cardPressed: {
    opacity: 0.8,
    backgroundColor: "#f1f5f9",
    transform: [{ scale: 0.99 }],
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
  },
  nombreText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  idText: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 2,
  },
});

export default PersonasView;
