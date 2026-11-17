import type { Department } from '../../Entities/Department';

export interface IDepartmentRepository {
  getAll(): readonly Department[];
}
