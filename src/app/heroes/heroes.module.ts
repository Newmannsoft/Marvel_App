import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {CardModule} from 'primeng/card';

import { MainPageComponent } from './components/main-page/main-page.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component'
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';
import { ComicsComponent } from './components/cards/comics/comics.component';



@NgModule({
  declarations: [
  
    MainPageComponent,
       CardsComponent,
       FavoritosComponent,
       CardComponent,
       ComicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule
    
  ], 
  exports: [
    MainPageComponent
  ]
})
export class HeroesModule { }
