import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.page.html',
  styleUrls: ['./libro.page.scss'],
})
export class LibroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  agregarFavoritos(){
    alert("Libro agregado a Favoritos");
  }
  

  agregarDeseados(){
    alert("Libro agregado a Deseados");
  }
}
