import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  buscarComics(event: any): Observable<any> {

    return this.http.get<any>(`${event}?format=comic&formatType=comic&orderBy=title&limit=4&ts=1&apikey=d6c0df971ce52fa345e1d30b9187091a&hash=df509038143caa3b418b295a39386545`)
    .pipe(map((data: any)=>  data.data.results))
    
  }
}
