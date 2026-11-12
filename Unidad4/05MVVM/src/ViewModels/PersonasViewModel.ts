import { Persona } from "../Models/Entities/Persona";
import { RepositoryPersonas } from "../Models/Data/RepositoryPersonas";

export class PersonasViewModel {
  // Propiedades privadas
  private _personas: Persona[];
  private _personaSeleccionada: Persona | null;

  constructor() {
    this._personas = RepositoryPersonas.obtenerPersonas();
    this._personaSeleccionada = null;
  }

  // Getters y Setters
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

  /**
   * Establece la persona seleccionada y ejecuta la alerta.
   * @param persona Objeto Persona seleccionado en la vista
   */
  public seleccionarPersona(persona: Persona): void {
    this._personaSeleccionada = persona;
    this.mostrarAlertaPersona();
  }

  /**
   * Muestra el nombre y los apellidos de la persona seleccionada mediante un alert.
   */
  public mostrarAlertaPersona(): void {
    if (this._personaSeleccionada) {
      alert(`${this._personaSeleccionada.nombre} ${this._personaSeleccionada.apellidos}`);
    }
  }
}

export default PersonasViewModel;
