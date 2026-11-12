import { Persona } from "../Entities/Persona";

export class RepositoryPersonas {
  /**
   * Proporciona un listado simulado de personas.
   */
  public static obtenerPersonas(): Persona[] {
    return [
      new Persona("1", "Ana", "García López"),
      new Persona("2", "Carlos", "Martínez Ruiz"),
      new Persona("3", "Lucía", "Fernández Gómez"),
      new Persona("4", "David", "Sánchez Romero"),
      new Persona("5", "Elena", "Torres Morales"),
      new Persona("6", "Javier", "Navarro Castillo"),
    ];
  }

  // Alias compatible
  public static getPersonas(): Persona[] {
    return RepositoryPersonas.obtenerPersonas();
  }
}

// Exportación en minúscula por compatibilidad con el enunciado ("repositoryPersonas")
export const repositoryPersonas = RepositoryPersonas;
export default RepositoryPersonas;
