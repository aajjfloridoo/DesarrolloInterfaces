import { Departamento } from '../entities/departamento';

/** Datos de ejemplo de departamentos disponibles en la aplicación. */
const departamentos = [
  new Departamento(1, 'Tecnología'),
  new Departamento(2, 'Recursos Humanos'),
  new Departamento(3, 'Marketing'),
  new Departamento(4, 'Finanzas'),
];

/** Proporciona operaciones de lectura sobre el catálogo de departamentos. */
export class RepositoryDepartamentos {
  /**
   * Devuelve una copia del listado completo de departamentos.
   * La copia evita que quien consume el repositorio modifique el array interno.
   * @returns Listado de todos los departamentos disponibles.
   */
  public static getListadoCompletoDepartamentos(): Departamento[] {
    return [...departamentos];
  }
}
