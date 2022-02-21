import { Component, OnInit } from '@angular/core';
import {  HistorialService } from 'src/app/services/historial.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  titulo: string = 'Historial'

  constructor(private buscarService: HistorialService) { }
  
  get historial() {
    return this.buscarService.historial
  }

  buscarSidebar(event: any) {
    return this.buscarService.historialHeroes(event);
  }
  
  
  
  ngOnInit(): void {
    
  }

}
