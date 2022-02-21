import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './heroes/components/main-page/main-page.component'


const routes: Routes = [

   { 
     path: '', 
     redirectTo: '/personajes',
     pathMatch: 'full'
   },
   { 
    path: '#', 
    component: MainPageComponent,
    pathMatch: 'full'
  },
  { 
    path: 'personajes',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
