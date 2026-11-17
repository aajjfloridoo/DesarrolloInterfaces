import type { PersonWithDeparDTO } from '../../DTO/PersonWithDeparDTO';

export interface IGetPersonsWithDepartments {
  execute(): readonly PersonWithDeparDTO[];
}
