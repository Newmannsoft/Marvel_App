import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

    titulo: string = 'Favoritos'
  constructor() { }

  ngOnInit(): void {
  }

}
