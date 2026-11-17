/**
 * Modelo de vista que extiende los datos de PersonWithDeparDTO con el color asignado al departamento.
 */
export class PersonUIModel {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly departmentId: string,
    public readonly departmentName: string,
    public readonly departmentColor: string,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
