import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HistorialService } from 'src/app/services/historial.service';


import { HeroesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
  constructor(
    private personajeService: HeroesService,
    private historialService: HistorialService
    ) { 
  
  }
  
  busqueda: string = '';

  todosLosPersonajes!: Observable<any>;
  
  ngOnInit(): void {

    this.historialService.busquedas$.subscribe(busqueda => {
      this.busqueda = busqueda
      this.todosLosPersonajes = this.personajeService.buscarHeroes(this.busqueda)
                         
    })

    
    
  }
}
