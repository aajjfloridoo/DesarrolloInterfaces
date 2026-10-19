import { Href, Link } from 'expo-router';
import { openBrowserAsync, WebBrowserPresentationStyle } from 'expo-web-browser';
import { type ComponentProps } from 'react';

/** Propiedades de un enlace externo de Expo Router, con destino obligatorio. */
type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href & string };

/**
 * Renderiza un enlace que abre una pestaña nueva en web y un navegador integrado en móvil.
 * @param href URL externa de destino.
 * @param rest Resto de propiedades compatibles con el componente `Link`.
 */
export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (process.env.EXPO_OS !== 'web') {
          // En móvil se evita la navegación predeterminada para abrir la URL dentro de la app.
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href, {
            presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
          });
        }
      }}
    />
  );
}
