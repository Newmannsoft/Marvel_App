import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private _historial: string[] = [];

  public busqueda: string = '';
  private busquedas = new BehaviorSubject<string>('')


  busquedas$ = this.busquedas.asObservable();
  
  constructor(
    
  ) { 
    localStorage.getItem('historial');

    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!)
    }
  }

  get historial(): string[] {
    return [...this._historial];
    
  }

  historialHeroes(event: string) {

    event = event.trim().toLocaleLowerCase();

    if(event.trim().length === 0){
      return;
    }

    this.busqueda = event;
    this.busquedas.next(this.busqueda.toString());

    if(!this._historial.includes(event) ) {
      
      this._historial.unshift(event);
      //Observable
     
      
      //Limite de Vistas en el Historial
      this._historial = this._historial.splice(0,9);
      
    }
    localStorage.setItem('historial', JSON.stringify(this._historial));
  }
}
