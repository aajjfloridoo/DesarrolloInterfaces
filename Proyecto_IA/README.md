# Proyecto IA

Aplicación móvil y web con Expo y React Native para consultar las personas que forman cada departamento.

## Estructura

- `src/models/entities/`: entidades `Persona`, `Departamento` y su relación.
- `src/models/data/`: repositorios en memoria con datos de ejemplo.
- `src/viewmodels/`: estado y reglas de presentación para la selección de departamento.
- `src/views/`: vistas reutilizables; `PersonaDepartamentoView` muestra el selector, el total y las personas.
- `src/app/`: rutas gestionadas por Expo Router.
- `src/components/`: componentes compartidos y navegación.
- `src/hooks/` y `src/constants/`: acceso al tema, esquema de color y constantes visuales.

Las clases, funciones y propiedades públicas están descritas con JSDoc en español. El editor puede mostrar esa documentación al pasar el cursor por sus símbolos; también se puede generar referencia de API con herramientas compatibles con TypeScript.

## Repositorio de personas

`RepositoryPersonas` trabaja con datos de ejemplo en memoria:

- `getPersonasDepartamento(id_departamento)` devuelve las personas del departamento indicado.
- `getListadoCompletoPersonas()` devuelve una copia superficial del listado.
- `deletePersona(id_persona)` elimina una persona solo si el ID es un entero positivo y existe. Devuelve `true` si la elimina y `false` si el ID no es válido o no se encuentra. La eliminación se pierde al reiniciar la aplicación.

## Ejecutar

```bash
npm install
npx expo start
```

Para comprobar el tipado:

```bash
npx tsc --noEmit
```
