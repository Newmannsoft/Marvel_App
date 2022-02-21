import { Component, OnInit } from '@angular/core';
import { Data, SearchGiftResponse } from 'src/app/Interfaces/apiRespuesta.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  heroes: SearchGiftResponse[] = [];
  constructor() { }

  ngOnInit(): void {
    

      
      
  }



}
