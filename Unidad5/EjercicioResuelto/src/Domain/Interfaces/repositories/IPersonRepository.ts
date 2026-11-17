import type { Person } from '../../Entities/Person';

export interface IPersonRepository {
  getAll(): readonly Person[];
}
