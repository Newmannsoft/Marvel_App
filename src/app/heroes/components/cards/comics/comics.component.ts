import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from 'src/app/services/comics.service';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private buscarComic: ComicsService) {

   }

   @Input() urlComics = '';
  
  comicsPersonaje!: Observable<any>;

  ngOnInit(): void {
    this.getComics();
    
    
  }

  getComics() {
    this.comicsPersonaje = this.buscarComic.buscarComics(this.urlComics);
    
  }

}
