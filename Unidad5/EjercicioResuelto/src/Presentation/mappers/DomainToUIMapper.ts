import type { PersonWithDeparDTO } from '../../Domain/DTO/PersonWithDeparDTO';
import { PersonUIModel } from '../models/PersonUIModel';
import type { IDomainToUIMapper } from './IDomainToUIMapper';

const departmentColors: Readonly<Record<string, string>> = {
  engineering: '#2563EB',
  people: '#16A34A',
  finance: '#EA580C',
  marketing: '#7C3AED',
  operations: '#DB2777',
};

const DEFAULT_ROW_COLOR = '#334155';

export class DomainToUIMapper implements IDomainToUIMapper {
  map(people: readonly PersonWithDeparDTO[]): readonly PersonUIModel[] {
    return people.map(
      (person) =>
        new PersonUIModel(
          person.id,
          person.firstName,
          person.lastName,
          person.departmentId,
          person.departmentName,
          departmentColors[person.departmentId] ?? DEFAULT_ROW_COLOR,
        ),
    );
  }
}
