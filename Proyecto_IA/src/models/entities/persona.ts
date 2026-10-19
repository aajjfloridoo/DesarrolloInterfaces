/**
 * Representa a una persona y su asignación a un departamento.
 * El identificador es inmutable; los demás datos se pueden modificar mediante sus setters.
 */
export class Persona {
  /**
   * Crea una persona.
   * @param _id Identificador único e inmutable de la persona.
   * @param _nombre Nombre de la persona.
   * @param _apellidos Apellidos de la persona.
   * @param _departamentos_id Identificador del departamento al que pertenece.
   */
  constructor(
    private readonly _id: number,
    private _nombre: string,
    private _apellidos: string,
    private _departamentos_id: number
  ) {}

  /** @returns Identificador único de la persona. */
  get id(): number {
    return this._id;
  }

  /** @returns Nombre actual de la persona. */
  get nombre(): string {
    return this._nombre;
  }

  /**
   * Cambia el nombre de la persona.
   * @param nombre Nuevo nombre.
   */
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  /** @returns Apellidos actuales de la persona. */
  get apellidos(): string {
    return this._apellidos;
  }

  /**
   * Cambia los apellidos de la persona.
   * @param apellidos Nuevos apellidos.
   */
  set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }

  /** @returns Identificador del departamento asignado. */
  get departamentos_id(): number {
    return this._departamentos_id;
  }

  /**
   * Cambia la asignación de departamento.
   * @param id Identificador del nuevo departamento.
   */
  set departamentos_id(id: number) {
    this._departamentos_id = id;
  }
}
