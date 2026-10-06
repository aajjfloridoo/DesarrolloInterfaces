import { Persona } from "../Models/Entities/Persona";
import { RepositoryPersonas } from "../Models/Data/RepositoryPersonas";

export class PersonasViewModel {
  private _personas: Persona[];
  private _personaSeleccionada: Persona | null;

  constructor() {
    this._personas = RepositoryPersonas.obtenerPersonas();
    this._personaSeleccionada = null;
  }

  public get personas(): Persona[] {
    return this._personas;
  }

  public set personas(value: Persona[]) {
    this._personas = value;
  }

  public get personaSeleccionada(): Persona | null {
    return this._personaSeleccionada;
  }

  public set personaSeleccionada(value: Persona | null) {
    this._personaSeleccionada = value;
  }

  public seleccionarPersona(persona: Persona): void {
    this.personaSeleccionada = persona;
    alert(`Has seleccionado a: ${persona.nombre} ${persona.apellidos}`);
  }
}
