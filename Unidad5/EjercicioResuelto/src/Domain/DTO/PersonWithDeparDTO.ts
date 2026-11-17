/**
 * DTO de respuesta que combina los datos de Person con el nombre de su departamento.
 * No hereda de Person porque representa una estructura de datos de salida, no una entidad del dominio.
 */
export class PersonWithDeparDTO {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly departmentId: string,
    public readonly departmentName: string,
  ) {}
}
