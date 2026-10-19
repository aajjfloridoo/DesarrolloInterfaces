import { RepositoryDepartamentos } from '@/models/data/repository-departamentos';
import { RepositoryPersonas } from '@/models/data/repository-personas';
import type { Departamento } from '@/models/entities/departamento';
import type { Persona } from '@/models/entities/persona';
import type { PersonaDepartamento } from '@/models/entities/persona-departamento';

/**
 * Mantiene los datos de la pantalla de departamentos y personas.
 * Al asignar un departamento seleccionado, actualiza los listados y su contador.
 */
export class departamentosPersonasVM {
  private readonly _listadoDepartamentos = RepositoryDepartamentos.getListadoCompletoDepartamentos();
  private _departamentoSeleccionado: Departamento | null = null;
  private _listadoPersonas: Persona[] = [];
  private _listado: PersonaDepartamento[] = [];
  private _numeroPersonas = 0;

  /** @returns Personas junto con el departamento al que pertenecen. */
  get listado(): PersonaDepartamento[] {
    return this._listado;
  }

  /** @returns Catálogo completo de departamentos disponibles. */
  get listadoDepartamentos(): Departamento[] {
    return this._listadoDepartamentos;
  }

  /** @returns Personas del departamento seleccionado. */
  get listadoPersonas(): Persona[] {
    return this._listadoPersonas;
  }

  /** @returns Departamento actualmente seleccionado, o `null` si no hay selección. */
  get departamentoSeleccionado(): Departamento | null {
    return this._departamentoSeleccionado;
  }

  /**
   * Selecciona un departamento y recalcula personas y total.
   * @param departamento Departamento a seleccionar, o `null` para limpiar los resultados.
   */
  set departamentoSeleccionado(departamento: Departamento | null) {
    this._departamentoSeleccionado = departamento;
    this.rellenarListadoPersonas();
  }

  /** @returns Número de personas del departamento seleccionado. */
  get numeroPersonas(): number {
    return this._numeroPersonas;
  }

  /** Actualiza la lista de personas y sus relaciones con el departamento seleccionado. */
  private rellenarListadoPersonas(): void {
    const departamento = this._departamentoSeleccionado;
    this._listadoPersonas = departamento
      ? RepositoryPersonas.getPersonasDepartamento(departamento.id)
      : [];
    this._listado = departamento
      ? this._listadoPersonas.map((persona) => ({ persona, departamento }))
      : [];
    this.calcularNumeroPersonas();
  }

  /** Recalcula el contador a partir del listado actual de personas. */
  private calcularNumeroPersonas(): void {
    this._numeroPersonas = this._listadoPersonas.length;
  }
}
