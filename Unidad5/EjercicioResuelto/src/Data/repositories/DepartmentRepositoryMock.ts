import { Department } from '../../Domain/Entities/Department';
import type { IDepartmentRepository } from '../../Domain/Interfaces/repositories/IDepartmentRepository';

export class DepartmentRepositoryMock implements IDepartmentRepository {
  private readonly departments: readonly Department[] = [
    new Department('engineering', 'Tecnología'),
    new Department('people', 'Recursos Humanos'),
    new Department('finance', 'Finanzas'),
    new Department('marketing', 'Marketing'),
    new Department('operations', 'Operaciones'),
  ];

  getAll(): readonly Department[] {
    return this.departments;
  }
}
