import type { IGetPersonsWithDepartments } from '../../Domain/Interfaces/usecases/IGetPersonsWithDepartments';
import type { IDomainToUIMapper } from '../mappers/IDomainToUIMapper';
import type { PersonUIModel } from '../models/PersonUIModel';

export class PersonListViewModel {
  private peopleValue: readonly PersonUIModel[] = [];

  constructor(
    private readonly getPersonsWithDepartments: IGetPersonsWithDepartments,
    private readonly mapper: IDomainToUIMapper,
  ) {}

  get people(): readonly PersonUIModel[] {
    return this.peopleValue;
  }

  get departmentsCount(): number {
    return new Set(this.peopleValue.map((person) => person.departmentId)).size;
  }

  load(): readonly PersonUIModel[] {
    this.peopleValue = this.mapper.map(this.getPersonsWithDepartments.execute());
    return this.peopleValue;
  }
}
