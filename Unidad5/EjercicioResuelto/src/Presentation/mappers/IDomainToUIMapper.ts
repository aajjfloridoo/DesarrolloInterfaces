import type { PersonWithDeparDTO } from '../../Domain/DTO/PersonWithDeparDTO';
import type { PersonUIModel } from '../models/PersonUIModel';

export interface IDomainToUIMapper {
  map(people: readonly PersonWithDeparDTO[]): readonly PersonUIModel[];
}
