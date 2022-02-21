import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  isLoading: boolean = false;
  
  constructor(
    private buscarService: HistorialService
  ) {

   }

  @Output() onNuevoPersonaje: EventEmitter<any> = new EventEmitter();

  onClick(): void {
    
    const valor = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = '';
    this.buscarService.historialHeroes(valor);
    
    
    
  
  }

  ngOnInit(): void {
  }

}
