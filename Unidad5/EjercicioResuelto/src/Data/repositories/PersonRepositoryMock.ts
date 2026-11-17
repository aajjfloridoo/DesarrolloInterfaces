import { Person } from '../../Domain/Entities/Person';
import type { IPersonRepository } from '../../Domain/Interfaces/repositories/IPersonRepository';

export class PersonRepositoryMock implements IPersonRepository {
  private readonly people: readonly Person[] = [
    new Person('p-01', 'Lucía', 'Martín López', 'engineering'),
    new Person('p-02', 'Mateo', 'García Ruiz', 'engineering'),
    new Person('p-03', 'Sofía', 'Fernández Díaz', 'engineering'),
    new Person('p-04', 'Hugo', 'López Sánchez', 'engineering'),
    new Person('p-05', 'Valeria', 'Pérez Romero', 'engineering'),
    new Person('p-06', 'Daniel', 'Gómez Torres', 'people'),
    new Person('p-07', 'Paula', 'Navarro Gil', 'people'),
    new Person('p-08', 'Álvaro', 'Díaz Moreno', 'people'),
    new Person('p-09', 'Emma', 'Romero Alonso', 'people'),
    new Person('p-10', 'Pablo', 'Molina Ortega', 'people'),
    new Person('p-11', 'Carla', 'Delgado Castro', 'finance'),
    new Person('p-12', 'Leo', 'Ortiz Rubio', 'finance'),
    new Person('p-13', 'Inés', 'Serrano Marín', 'finance'),
    new Person('p-14', 'Marcos', 'Iglesias Cano', 'finance'),
    new Person('p-15', 'Noa', 'Medina Santos', 'finance'),
    new Person('p-16', 'Adrián', 'Castillo Vega', 'marketing'),
    new Person('p-17', 'Mía', 'Cortés Flores', 'marketing'),
    new Person('p-18', 'Gabriel', 'Guerrero León', 'marketing'),
    new Person('p-19', 'Alma', 'Reyes Cruz', 'marketing'),
    new Person('p-20', 'Martín', 'Gutiérrez Ortiz', 'marketing'),
    new Person('p-21', 'Aitana', 'Morales Jiménez', 'operations'),
    new Person('p-22', 'Diego', 'Vázquez Herrera', 'operations'),
    new Person('p-23', 'Nora', 'Ramos Aguilar', 'operations'),
    new Person('p-24', 'Bruno', 'Román Núñez', 'operations'),
    new Person('p-25', 'Chloe', 'Fuentes Iglesias', 'operations'),
  ];

  getAll(): readonly Person[] {
    return this.people;
  }
}
