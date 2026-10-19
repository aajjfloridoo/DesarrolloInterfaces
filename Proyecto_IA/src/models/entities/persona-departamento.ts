import type { Departamento } from './departamento';
import type { Persona } from './persona';

/** Relaciona una persona con el departamento que se muestra en el listado. */
export interface PersonaDepartamento {
  /** Persona perteneciente al departamento. */
  persona: Persona;
  /** Departamento al que pertenece la persona. */
  departamento: Departamento;
}
