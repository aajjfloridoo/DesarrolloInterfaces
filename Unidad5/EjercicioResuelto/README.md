# Ejercicio resuelto — Clean Architecture

Aplicación Expo / React Native que muestra 25 personas distribuidas en cinco
departamentos. Cada fila usa un color asociado a su departamento.

## Ejecutar

```bash
npm install
npm start
```

## Estructura

- `src/Domain`: entidades, DTO y contratos de repositorios y casos de uso.
- `src/Application`: caso de uso para combinar personas y departamentos.
- `src/Data`: repositorios mock con cinco departamentos y cinco personas por
  departamento.
- `src/Presentation`: mapper, modelo visual, ViewModel y pantalla.
- `src/core/container.ts`: registro y resolución de dependencias con Inversify.
- `src/app`: rutas Expo Router.

El caso de uso recibe los dos repositorios por constructor. El ViewModel recibe
el caso de uso y el mapper; las instancias se resuelven desde el contenedor.
