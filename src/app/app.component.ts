import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
}

// para mostrar  la propiedad de la clase
// que se llama " numero "" en el archivo app.component.html
// debo escribir en ese archivo esta sintaxis:
// <span> {{numero}} </span> 
//


