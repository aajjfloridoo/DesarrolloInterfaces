import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

// Impide que Expo oculte la pantalla de carga antes de que esté lista la vista inicial.
SplashScreen.preventAutoHideAsync();

/** Configura el tema global y la navegación por pestañas de la aplicación. */
export default function TabLayout() {
  const colorScheme = useColorScheme();
  // Usa el tema claro cuando el sistema no comunica una preferencia explícita.
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
