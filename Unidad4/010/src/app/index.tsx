import React, { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

/**
 * EJERCICIO 10: Componente Core elegido -> "Modal" (junto con "Switch")
 *
 * Enunciado:
 * A partir de la documentación oficial de React Native (Core Components and APIs),
 * se ha elegido el componente <Modal>, el cual no se utilizó en ejercicios anteriores.
 *
 * Funcionalidad:
 * - Demostración de dos tipos de ventanas modales:
 *   1. Modal de Confirmación (animación 'fade', fondo translúcido oscurecido).
 *   2. Modal de Ajustes/Configuración (animación 'slide' estilo bottom-sheet)
 *      que incluye el componente Core <Switch> para activar/desactivar opciones.
 * - Manejo de propiedades esenciales del Modal:
 *   - `visible`: control del renderizado mediante estado de React.
 *   - `animationType`: transiciones fluidas ('slide' y 'fade').
 *   - `transparent`: superposición sobre la pantalla actual.
 *   - `onRequestClose`: soporte para el botón físico/gesto de "Atrás" en Android.
 */

export default function Index() {
  // Estados para controlar la visibilidad de los modales
  const [modalConfirmacionVisible, setModalConfirmacionVisible] = useState(false);
  const [modalAjustesVisible, setModalAjustesVisible] = useState(false);

  // Estados para opciones configurables dentro del modal de ajustes (usando Switch)
  const [notificacionesActivas, setNotificacionesActivas] = useState(true);
  const [modoOscuroActivo, setModoOscuroActivo] = useState(false);

  // Estado para mostrar feedback de la última acción realizada
  const [ultimoMensaje, setUltimoMensaje] = useState<string | null>(null);

  // Acción confirmada en el modal de confirmación
  const handleConfirmarEliminacion = () => {
    setModalConfirmacionVisible(false);
    setUltimoMensaje("¡Acción completada con éxito!");
    Alert.alert("Éxito", "El elemento ha sido eliminado correctamente.");
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        modoOscuroActivo && styles.safeAreaDark,
      ]}
    >
      <StatusBar barStyle={modoOscuroActivo ? "light-content" : "dark-content"} />

      <View style={styles.container}>
        {/* Cabecera de la aplicación */}
        <View style={styles.header}>
          <Text
            style={[
              styles.badge,
              modoOscuroActivo && styles.badgeDark,
            ]}
          >
            Core Component: Modal
          </Text>
          <Text
            style={[
              styles.titulo,
              modoOscuroActivo && styles.textoDark,
            ]}
          >
            Ejercicio 10: Ventana Modal
          </Text>
          <Text
            style={[
              styles.descripcion,
              modoOscuroActivo && styles.subtextoDark,
            ]}
          >
            Presentación de diálogos flotantes y paneles emergentes sobre la vista actual.
          </Text>
        </View>

        {/* Tarjeta de estado y controles */}
        <View
          style={[
            styles.card,
            modoOscuroActivo && styles.cardDark,
          ]}
        >
          <Text
            style={[
              styles.cardTitulo,
              modoOscuroActivo && styles.textoDark,
            ]}
          >
            Panel de Acciones
          </Text>
          <Text
            style={[
              styles.cardTexto,
              modoOscuroActivo && styles.subtextoDark,
            ]}
          >
            Pulsa cualquiera de los botones para desplegar el componente Modal con diferente configuración y animación.
          </Text>

          {/* Botón 1: Abre Modal de Ajustes */}
          <Pressable
            style={({ pressed }) => [
              styles.boton,
              styles.botonAjustes,
              pressed && styles.botonPressed,
            ]}
            onPress={() => setModalAjustesVisible(true)}
          >
            <Text style={styles.botonTexto}>⚙️ Abrir Modal de Ajustes (Slide)</Text>
          </Pressable>

          {/* Botón 2: Abre Modal de Confirmación */}
          <Pressable
            style={({ pressed }) => [
              styles.boton,
              styles.botonPeligro,
              pressed && styles.botonPressed,
            ]}
            onPress={() => setModalConfirmacionVisible(true)}
          >
            <Text style={styles.botonTexto}>🗑️ Abrir Diálogo de Confirmación (Fade)</Text>
          </Pressable>

          {/* Resumen del estado actual configurado */}
          <View style={styles.resumenContainer}>
            <Text
              style={[
                styles.resumenTitulo,
                modoOscuroActivo && styles.textoDark,
              ]}
            >
              Estado de preferencias:
            </Text>
            <Text
              style={[
                styles.resumenItem,
                modoOscuroActivo && styles.subtextoDark,
              ]}
            >
              • Notificaciones:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {notificacionesActivas ? "Activadas" : "Desactivadas"}
              </Text>
            </Text>
            <Text
              style={[
                styles.resumenItem,
                modoOscuroActivo && styles.subtextoDark,
              ]}
            >
              • Modo Oscuro:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {modoOscuroActivo ? "Activado" : "Desactivado"}
              </Text>
            </Text>

            {ultimoMensaje && (
              <Text style={styles.mensajeFeedback}>{ultimoMensaje}</Text>
            )}
          </View>
        </View>
      </View>

      {/* ======================================================== */}
      {/* 1. MODAL DE CONFIRMACIÓN (Alerta estilizada centrada)   */}
      {/* ======================================================== */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalConfirmacionVisible}
        onRequestClose={() => setModalConfirmacionVisible(false)}
      >
        <View style={styles.backdropModal}>
          <View style={styles.dialogoConfirmacion}>
            <View style={styles.iconoAlerta}>
              <Text style={styles.iconoAlertaTexto}>⚠️</Text>
            </View>

            <Text style={styles.dialogoTitulo}>¿Confirmar eliminación?</Text>
            <Text style={styles.dialogoMensaje}>
              Esta acción no se puede deshacer. Se eliminarán los datos seleccionados del sistema.
            </Text>

            <View style={styles.dialogoBotones}>
              <Pressable
                style={[styles.botonModal, styles.botonCancelar]}
                onPress={() => setModalConfirmacionVisible(false)}
              >
                <Text style={styles.botonCancelarTexto}>Cancelar</Text>
              </Pressable>

              <Pressable
                style={[styles.botonModal, styles.botonConfirmar]}
                onPress={handleConfirmarEliminacion}
              >
                <Text style={styles.botonConfirmarTexto}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* ======================================================== */}
      {/* 2. MODAL DE AJUSTES (Panel deslizante inferior / Sheet)  */}
      {/* ======================================================== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAjustesVisible}
        onRequestClose={() => setModalAjustesVisible(false)}
      >
        <View style={styles.backdropModalInferior}>
          <View
            style={[
              styles.panelAjustes,
              modoOscuroActivo && styles.panelAjustesDark,
            ]}
          >
            {/* Indicador de arrastre superior */}
            <View style={styles.indicadorDrag} />

            <Text
              style={[
                styles.panelTitulo,
                modoOscuroActivo && styles.textoDark,
              ]}
            >
              Ajustes de la Aplicación
            </Text>
            <Text
              style={[
                styles.panelSubtitulo,
                modoOscuroActivo && styles.subtextoDark,
              ]}
            >
              Modifica las opciones usando los componentes Switch:
            </Text>

            {/* Fila Switch 1: Notificaciones */}
            <View style={styles.filaSwitch}>
              <View style={styles.switchInfo}>
                <Text
                  style={[
                    styles.switchLabel,
                    modoOscuroActivo && styles.textoDark,
                  ]}
                >
                  Notificaciones push
                </Text>
                <Text
                  style={[
                    styles.switchDescripcion,
                    modoOscuroActivo && styles.subtextoDark,
                  ]}
                >
                  Recibir alertas y recordatorios
                </Text>
              </View>
              <Switch
                value={notificacionesActivas}
                onValueChange={setNotificacionesActivas}
                trackColor={{ false: "#cbd5e1", true: "#3b82f6" }}
                thumbColor={notificacionesActivas ? "#ffffff" : "#f1f5f9"}
              />
            </View>

            {/* Fila Switch 2: Modo Oscuro */}
            <View style={styles.filaSwitch}>
              <View style={styles.switchInfo}>
                <Text
                  style={[
                    styles.switchLabel,
                    modoOscuroActivo && styles.textoDark,
                  ]}
                >
                  Modo Oscuro
                </Text>
                <Text
                  style={[
                    styles.switchDescripcion,
                    modoOscuroActivo && styles.subtextoDark,
                  ]}
                >
                  Cambiar la paleta de colores a tonos oscuros
                </Text>
              </View>
              <Switch
                value={modoOscuroActivo}
                onValueChange={setModoOscuroActivo}
                trackColor={{ false: "#cbd5e1", true: "#6366f1" }}
                thumbColor={modoOscuroActivo ? "#ffffff" : "#f1f5f9"}
              />
            </View>

            {/* Botón de cierre del modal */}
            <Pressable
              style={({ pressed }) => [
                styles.botonCerrarPanel,
                pressed && styles.botonPressed,
              ]}
              onPress={() => setModalAjustesVisible(false)}
            >
              <Text style={styles.botonCerrarPanelTexto}>Guardar y Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  safeAreaDark: {
    backgroundColor: "#0f172a",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  badge: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    fontSize: 12,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  badgeDark: {
    backgroundColor: "#1e3a8a",
    color: "#93c5fd",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 20,
  },
  textoDark: {
    color: "#f8fafc",
  },
  subtextoDark: {
    color: "#94a3b8",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  cardDark: {
    backgroundColor: "#1e293b",
    borderColor: "#334155",
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 6,
  },
  cardTexto: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 20,
    lineHeight: 20,
  },
  boton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  botonAjustes: {
    backgroundColor: "#2563eb",
  },
  botonPeligro: {
    backgroundColor: "#dc2626",
  },
  botonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  botonTexto: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 15,
  },
  resumenContainer: {
    marginTop: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
  },
  resumenTitulo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },
  resumenItem: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },
  mensajeFeedback: {
    marginTop: 10,
    fontSize: 13,
    color: "#16a34a",
    fontWeight: "600",
  },

  // Estilos de los Modales
  backdropModal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  backdropModalInferior: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    justifyContent: "flex-end",
  },
  dialogoConfirmacion: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  iconoAlerta: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fef2f2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  iconoAlertaTexto: {
    fontSize: 28,
  },
  dialogoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
    textAlign: "center",
  },
  dialogoMensaje: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  dialogoBotones: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  botonModal: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  botonCancelar: {
    backgroundColor: "#f1f5f9",
  },
  botonCancelarTexto: {
    color: "#475569",
    fontWeight: "600",
    fontSize: 14,
  },
  botonConfirmar: {
    backgroundColor: "#dc2626",
  },
  botonConfirmarTexto: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },

  // Estilos del panel de ajustes
  panelAjustes: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
  },
  panelAjustesDark: {
    backgroundColor: "#1e293b",
  },
  indicadorDrag: {
    width: 40,
    height: 4,
    backgroundColor: "#cbd5e1",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },
  panelTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 4,
  },
  panelSubtitulo: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 20,
  },
  filaSwitch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  switchInfo: {
    flex: 1,
    marginRight: 12,
  },
  switchLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1e293b",
  },
  switchDescripcion: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  botonCerrarPanel: {
    marginTop: 24,
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botonCerrarPanelTexto: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 15,
  },
});
