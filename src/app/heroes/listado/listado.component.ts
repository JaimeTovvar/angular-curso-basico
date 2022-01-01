import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Captian America'];
  heroeBorrado: string ='';

  borrarHeroe() {

    
    this.heroeBorrado = this.heroes.shift() || '';

    // esto se usa || '' para indicar que devuelva un string vacio

   
    
  }
  
  

  

}


