import { Container } from 'inversify';

import { GetPersonsWithDepartments } from '../Application/usecases/GetPersonsWithDepartments';
import { DepartmentRepositoryMock } from '../Data/repositories/DepartmentRepositoryMock';
import { PersonRepositoryMock } from '../Data/repositories/PersonRepositoryMock';
import type { IDepartmentRepository } from '../Domain/Interfaces/repositories/IDepartmentRepository';
import type { IPersonRepository } from '../Domain/Interfaces/repositories/IPersonRepository';
import type { IGetPersonsWithDepartments } from '../Domain/Interfaces/usecases/IGetPersonsWithDepartments';
import { DomainToUIMapper } from '../Presentation/mappers/DomainToUIMapper';
import type { IDomainToUIMapper } from '../Presentation/mappers/IDomainToUIMapper';
import { PersonListViewModel } from '../Presentation/viewmodels/PersonListViewModel';

const TYPES = {
  DepartmentRepository: Symbol.for('DepartmentRepository'),
  PersonRepository: Symbol.for('PersonRepository'),
  GetPersonsWithDepartments: Symbol.for('GetPersonsWithDepartments'),
  DomainToUIMapper: Symbol.for('DomainToUIMapper'),
  PersonListViewModel: Symbol.for('PersonListViewModel'),
} as const;

const container = new Container();

container
  .bind<IDepartmentRepository>(TYPES.DepartmentRepository)
  .to(DepartmentRepositoryMock)
  .inSingletonScope();
container
  .bind<IPersonRepository>(TYPES.PersonRepository)
  .to(PersonRepositoryMock)
  .inSingletonScope();
container
  .bind<IGetPersonsWithDepartments>(TYPES.GetPersonsWithDepartments)
  .toResolvedValue(
    (personRepository: IPersonRepository, departmentRepository: IDepartmentRepository) =>
      new GetPersonsWithDepartments(personRepository, departmentRepository),
    [TYPES.PersonRepository, TYPES.DepartmentRepository],
  )
  .inSingletonScope();
container
  .bind<IDomainToUIMapper>(TYPES.DomainToUIMapper)
  .to(DomainToUIMapper)
  .inSingletonScope();
container
  .bind<PersonListViewModel>(TYPES.PersonListViewModel)
  .toResolvedValue(
    (useCase: IGetPersonsWithDepartments, mapper: IDomainToUIMapper) =>
      new PersonListViewModel(useCase, mapper),
    [TYPES.GetPersonsWithDepartments, TYPES.DomainToUIMapper],
  )
  .inSingletonScope();

export { container, TYPES };
