import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * Devuelve el esquema de color del navegador después de hidratar la vista.
 * Antes de la hidratación usa el tema claro para que la salida estática sea determinista.
 * @returns Esquema del sistema o `light` mientras se hidrata la aplicación.
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  // Evita que la renderización estática dependa de las preferencias del navegador.
  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}
