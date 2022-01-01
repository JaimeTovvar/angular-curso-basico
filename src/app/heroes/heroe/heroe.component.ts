import { Component } from "@angular/core";




@Component({

    selector : 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

    nombre: string= 'Ironman';
    edad: number= 29;

    // get 
    // crear mediante codigo una propiedad
    // que al ser ejecutada o llamada sera 
    // procesada

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {

        return `${this.nombre}-${this.edad}`;
        // la linea 19 es equivalente a:
       // return this.nombre+'-'+this.edad.toString();


    }

    cambiarNombre():void{

        this.nombre='Spiderman';


    }

    cambiarEdad (): void {

        this.edad=31;
    }

}