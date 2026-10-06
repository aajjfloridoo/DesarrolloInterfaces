import { Persona } from "../Entities/Persona";

export class RepositoryPersonas {
  public static obtenerPersonas(): Persona[] {
    return [
      new Persona("1", "Ana", "García López"),
      new Persona("2", "Carlos", "Martínez Ruiz"),
      new Persona("3", "Lucía", "Fernández Gómez"),
      new Persona("4", "David", "Sánchez Romero"),
    ];
  }
}
