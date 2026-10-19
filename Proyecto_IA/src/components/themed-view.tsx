import { View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** Propiedades de una vista nativa con fondo tomado del tema actual. */
export type ThemedViewProps = ViewProps & {
  /** Propiedad heredada; no se aplica. Para cambiar el fondo, usa `style`. */
  lightColor?: string;
  /** Propiedad heredada; no se aplica. Para cambiar el fondo, usa `style`. */
  darkColor?: string;
  /** Clave del color semántico usada como fondo. */
  type?: ThemeColor;
};

/**
 * Renderiza una vista usando el color de fondo del tema.
 * @param type Color semántico de fondo; usa `background` si no se indica.
 * @param style Estilos adicionales que se aplican después del fondo del tema.
 * @param otherProps Resto de propiedades admitidas por `View`.
 */
export function ThemedView({ style, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();

  return <View style={[{ backgroundColor: theme[type ?? 'background'] }, style]} {...otherProps} />;
}
