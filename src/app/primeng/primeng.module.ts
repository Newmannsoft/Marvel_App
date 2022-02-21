import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  exports: [
    CardModule,
    ButtonModule
  ]
})
export class PrimengModule { }
