

import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



import { HistorialService } from './historial.service';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {
   
 

  resultados: string[] = [];

  constructor(
    private buscarService: HistorialService,
    private http: HttpClient
    
     ) {

   }

  buscarHeroes(event: string): Observable<any> {

    return this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${event}&ts=1&apikey=d6c0df971ce52fa345e1d30b9187091a&hash=df509038143caa3b418b295a39386545`)
      .pipe(
        map(
          (data: any)=>  data.data.results
        )
      );
      
  } 


  

  ngOnInit(): void {
    
  }

  

  
  

  

  // localStorage.setItem('resultados', JSON.stringify(this.resultados));
}
