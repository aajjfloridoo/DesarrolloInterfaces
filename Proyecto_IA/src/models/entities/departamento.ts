/** Representa un departamento de la organización. */
export class Departamento {
  /**
   * Crea un departamento.
   * @param _id Identificador único e inmutable del departamento.
   * @param _nombre Nombre inmutable del departamento.
   */
  constructor(
    private readonly _id: number,
    private readonly _nombre: string
  ) {}

  /** @returns Identificador único del departamento. */
  get id(): number {
    return this._id;
  }

  /** @returns Nombre del departamento. */
  get nombre(): string {
    return this._nombre;
  }
}
