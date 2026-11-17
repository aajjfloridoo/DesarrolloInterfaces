import { PersonWithDeparDTO } from '../../Domain/DTO/PersonWithDeparDTO';
import type { IDepartmentRepository } from '../../Domain/Interfaces/repositories/IDepartmentRepository';
import type { IPersonRepository } from '../../Domain/Interfaces/repositories/IPersonRepository';
import type { IGetPersonsWithDepartments } from '../../Domain/Interfaces/usecases/IGetPersonsWithDepartments';

export class GetPersonsWithDepartments implements IGetPersonsWithDepartments {
  constructor(
    private readonly personRepository: IPersonRepository,
    private readonly departmentRepository: IDepartmentRepository,
  ) {}

  execute(): readonly PersonWithDeparDTO[] {
    const departments = new Map(
      this.departmentRepository.getAll().map((department) => [department.id, department]),
    );

    return this.personRepository.getAll().map((person) => {
      const department = departments.get(person.departmentId);

      if (!department) {
        throw new Error(
          `No existe el departamento "${person.departmentId}" de la persona "${person.id}".`,
        );
      }

      return new PersonWithDeparDTO(
        person.id,
        person.firstName,
        person.lastName,
        department.id,
        department.name,
      );
    });
  }
}
