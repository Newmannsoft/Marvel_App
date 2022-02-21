import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

import {ButtonModule} from 'primeng/button';
import { BuscadorComponent } from './components/navbar/buscador/buscador.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule
    
  ], 
  exports: [
  
    SidebarComponent,
    NavbarComponent
   
  ]
})
export class SharedModule { }
