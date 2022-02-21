import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { PrimengModule } from './primeng/primeng.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
    
    SharedModule,
    HeroesModule,
    PrimengModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
