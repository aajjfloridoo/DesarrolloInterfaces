import { Persona } from '../entities/persona';

/** Datos de ejemplo en memoria; las eliminaciones duran hasta reiniciar la aplicación. */
const personas = [
  new Persona(1, 'Lucía', 'Martín García', 1),
  new Persona(2, 'Hugo', 'Sánchez Ruiz', 1),
  new Persona(3, 'Valeria', 'López Moreno', 1),
  new Persona(4, 'Mateo', 'Pérez Díaz', 1),
  new Persona(5, 'Sofía', 'Romero Gil', 2),
  new Persona(6, 'Daniel', 'Navarro Torres', 2),
  new Persona(7, 'Paula', 'Ortega León', 2),
  new Persona(8, 'Leo', 'Molina Vega', 3),
  new Persona(9, 'Carla', 'Castro Rubio', 3),
  new Persona(10, 'Martín', 'Iglesias Cano', 3),
  new Persona(11, 'Alba', 'Medina Santos', 4),
  new Persona(12, 'Diego', 'Cruz Herrera', 4),
  new Persona(13, 'Alejandro', 'Gómez Fernández', 4),
  new Persona(14, 'Carmen', 'Rodríguez Álvarez', 4),
  new Persona(15, 'David', 'García Pérez', 5),
  new Persona(16, 'María', 'González Sánchez', 5),
  new Persona(17, 'Javier', 'Martínez Gómez', 5),
  new Persona(18, 'Julia', 'López Fernández', 5),
  new Persona(19, 'Pablo', 'Martín Ruiz', 6),
  new Persona(20, 'Daniela', 'Hernández Díaz', 6),
  new Persona(21, 'Álvaro', 'Moreno Muñoz', 6),
  new Persona(22, 'Martina', 'Álvarez Romero', 6),
  new Persona(23, 'Adrián', 'Alonso Gutiérrez', 7),
  new Persona(24, 'Emma', 'Navarro Torres', 7),
  new Persona(25, 'Mario', 'Domínguez Vázquez', 7),
  new Persona(26, 'Sara', 'Ramos Gil', 7),
  new Persona(27, 'Marcos', 'Ramírez Serrano', 8),
  new Persona(28, 'Elena', 'Blanco Molina', 8),
  new Persona(29, 'Sergio', 'Morales Suárez', 8),
  new Persona(30, 'Aitana', 'Ortega Delgado', 8),
  new Persona(31, 'Carlos', 'Castro Ortiz', 9),
  new Persona(32, 'Vega', 'Rubio Marín', 9),
  new Persona(33, 'Iker', 'Sanz Núñez', 9),
  new Persona(34, 'Noa', 'Iglesias Medina', 9),
  new Persona(35, 'Iván', 'Garrido Cortés', 10),
  new Persona(36, 'Claudia', 'Castillo Santos', 10),
  new Persona(37, 'Lucas', 'Lozano Guerrero', 10),
  new Persona(38, 'Ana', 'Cano Prieto', 10),
  new Persona(39, 'Jorge', 'Méndez Cruz', 1),
  new Persona(40, 'Lola', 'Gallego Vidal', 1),
  new Persona(41, 'Ángel', 'Peña Herrera', 1),
  new Persona(42, 'Chloe', 'Flores Cabrera', 1),
  new Persona(43, 'Manuel', 'Márquez León', 2),
  new Persona(44, 'Mia', 'Giménez Mora', 2),
  new Persona(45, 'Miguel', 'Arias Navarro', 2),
  new Persona(46, 'Victoria', 'Carmona Vicente', 2),
  new Persona(47, 'Héctor', 'Crespo Soler', 3),
  new Persona(48, 'Laia', 'Soto Reyes', 3),
  new Persona(49, 'Raúl', 'Pastor Aguilar', 3),
  new Persona(50, 'Gala', 'Pascual Santana', 3),
  new Persona(51, 'Ismael', 'Lorenzo Hidalgo', 4),
  new Persona(52, 'Zoe', 'Montero Ibáñez', 4),
  new Persona(53, 'Víctor', 'Caballero Mora', 4),
  new Persona(54, 'Blanca', 'Ferrer Márquez', 4),
  new Persona(55, 'Gonzalo', 'Giménez Ramos', 5),
  new Persona(56, 'Inés', 'Rojas Carmona', 5),
  new Persona(57, 'Rubén', 'Velasco Castro', 5),
  new Persona(58, 'Marta', 'Silva Pardo', 5),
  new Persona(59, 'Óscar', 'Díez Vidal', 6),
  new Persona(60, 'Lara', 'Navarro Romero', 6),
  new Persona(61, 'Eduardo', 'Moya Vargas', 6),
  new Persona(62, 'Alicia', 'Valero Bravo', 6),
  new Persona(63, 'José', 'Serrano Vicente', 7),
  new Persona(64, 'Celia', 'García González', 7),
  new Persona(65, 'Antonio', 'Rodríguez López', 7),
  new Persona(66, 'Irene', 'Martínez Sánchez', 7),
  new Persona(67, 'Francisco', 'Pérez Gómez', 8),
  new Persona(68, 'Nerea', 'Martín Jiménez', 8),
  new Persona(69, 'Juan', 'Ruiz Hernández', 8),
  new Persona(70, 'Candela', 'Díaz Moreno', 8),
  new Persona(71, 'Raúl', 'Muñoz Álvarez', 9),
  new Persona(72, 'Silvia', 'Romero Alonso', 9),
  new Persona(73, 'Izan', 'Gutiérrez Navarro', 9),
  new Persona(74, 'Berta', 'Torres Domínguez', 9),
  new Persona(75, 'Bruno', 'Vázquez Ramos', 10),
  new Persona(76, 'Carlota', 'Gil Ramírez', 10),
  new Persona(77, 'Nicolás', 'Blanco Molina', 10),
  new Persona(78, 'Ainhoa', 'Morales Suárez', 10),
  new Persona(79, 'Álex', 'Ortega Delgado', 1),
  new Persona(80, 'Marina', 'Ortiz Rubio', 1),
  new Persona(81, 'Luis', 'Marín Sanz', 1),
  new Persona(82, 'Ariadna', 'Núñez Iglesias', 1),
  new Persona(83, 'Pedro', 'Medina Garrido', 2),
  new Persona(84, 'Rocío', 'Cortés Castillo', 2),
  new Persona(85, 'Fernando', 'Lozano Guerrero', 2),
  new Persona(86, 'Luna', 'Cano Prieto', 2),
  new Persona(87, 'Guillermo', 'Méndez Cruz', 3),
  new Persona(88, 'Olivia', 'Gallego Vidal', 3),
  new Persona(89, 'Marc', 'Peña Herrera', 3),
  new Persona(90, 'Elsa', 'Flores Cabrera', 3),
  new Persona(91, 'Roberto', 'Márquez León', 4),
  new Persona(92, 'Alma', 'Giménez Mora', 4),
  new Persona(93, 'Ignacio', 'Arias Navarro', 4),
  new Persona(94, 'Clara', 'Carmona Vicente', 4),
  new Persona(95, 'Jaime', 'Crespo Soler', 5),
  new Persona(96, 'Macarena', 'Soto Reyes', 5),
  new Persona(97, 'Enrique', 'Pastor Aguilar', 5),
  new Persona(98, 'Noelia', 'Pascual Santana', 5),
  new Persona(99, 'Joan', 'Lorenzo Hidalgo', 6),
  new Persona(100, 'Salma', 'Montero Ibáñez', 6),
];

/** Proporciona consultas y operaciones de mantenimiento sobre las personas. */
export class RepositoryPersonas {
  /**
   * Busca las personas asignadas a un departamento.
   * @param id_departamento Identificador del departamento que se quiere consultar.
   * @returns Personas del departamento; un array vacío si ninguna pertenece a él.
   */
  public static getPersonasDepartamento(id_departamento: number): Persona[] {
    return personas.filter((persona) => persona.departamentos_id === id_departamento);
  }

  /**
   * Devuelve una copia del listado completo de personas.
   * La copia evita alterar el array interno del repositorio desde fuera.
   * @returns Listado de todas las personas.
   */
  public static getListadoCompletoPersonas(): Persona[] {
    return [...personas];
  }

  /**
   * Elimina una persona del repositorio en memoria.
   * Condición: `id_persona` debe ser un número entero positivo y corresponder a una persona existente.
   * @param id_persona Identificador de la persona que se quiere eliminar.
   * @returns `true` si la persona existía y fue eliminada; `false` si el ID no es válido o no existe.
   */
  public static deletePersona(id_persona: number): boolean {
    if (!Number.isInteger(id_persona) || id_persona <= 0) {
      return false;
    }

    const index = personas.findIndex((persona) => persona.id === id_persona);
    if (index === -1) {
      return false;
    }

    personas.splice(index, 1);
    return true;
  }
}
