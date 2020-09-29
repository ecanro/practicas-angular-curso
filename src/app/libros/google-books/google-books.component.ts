import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'kc-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {

/**aqui iniciamos el servicio googlebooks**/
  //esta se utiliza en la vista html
  clave: string;
  //este se llama despues de clic en boton buscar en la vista
  aLibros: Array<string>;
  //url base para la busqueda, se indica mas abajo
  urlBase: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar() {
    //nice! creamos un template que concatena nuestra urlbase y la clave que es el texto ingresado
    //en el campo clave de busqueda
    const URL = this.urlBase + this.clave;
    this.clave = '';
    this.aLibros = [];
    this.http.get(URL).subscribe(
      (response: any) => {
        response.items.forEach(element => {
          this.aLibros.push(
            element.volumeInfo.title);
        }); }
    )
  }


}
