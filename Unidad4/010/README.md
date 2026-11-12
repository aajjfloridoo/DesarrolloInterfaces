# Ejercicio 10: Core Component `Modal` (y `Switch`)

Este proyecto corresponde al **Ejercicio 10** de la Unidad 4 de Desarrollo de Interfaces.

## Componente Core Elegido
De la lista oficial de componentes y APIs de React Native ([Core Components and APIs](https://reactnative.dev/docs/components-and-apis)), se ha seleccionado el componente:

👉 **`Modal`** (junto con el componente **`Switch`**)

Ninguno de estos dos componentes fue utilizado en los ejercicios anteriores (`tarjeta`, `counter`, `Views`, `FlatList`, `MVVM`, `TextInput`, `ActivityIndicator`).

---

## Enunciado y Propósito del Ejercicio

Desarrollar una aplicación interactiva que demuestre el uso práctico y versátil de las ventanas emergentes en dispositivos móviles mediante el componente `<Modal>`:

1. **Modal de Confirmación Crítica (Alerta personalizada)**:
   - Diálogo centrado con fondo translúcido oscurecido (`transparent={true}`).
   - Animación de desvanecimiento suave (`animationType="fade"`).
   - Manejo de botones de acción: "Cancelar" y "Eliminar".
   - Soporte para el botón físico/gesto de "Atrás" en Android (`onRequestClose`).

2. **Modal de Ajustes / Preferencias (Bottom Sheet deslizable)**:
   - Panel emergente que entra deslizándose desde la parte inferior de la pantalla (`animationType="slide"`).
   - Incorpora el componente Core **`<Switch>`** para alternar interactivamente:
     - Activación de notificaciones push.
     - Activación de Modo Oscuro dinámico en toda la aplicación.
   - Botón para guardar las preferencias y cerrar el modal.

---

## Propiedades Clave de `<Modal>` utilizadas

| Propiedad | Valor utilizado | Propósito |
| :--- | :--- | :--- |
| `visible` | `boolean` (controlado con `useState`) | Muestra u oculta el modal según el estado. |
| `transparent` | `true` | Permite ver la pantalla principal de fondo con un overlay oscurecido. |
| `animationType` | `"fade"` / `"slide"` | Define la transición de entrada y salida visual. |
| `onRequestClose` | `() => void` | Imprescindible para responder al botón "Atrás" en dispositivos Android. |

---

## Ejecución del Proyecto

Para iniciar la aplicación con Expo:

```bash
npm install
npx expo start
```
