import{Component}  from '@angular/core'

@Component({

    selector: 'app-contador',
    template: `

        <h1> {{titulo}} </h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <!-- se van a colocar dos botones  -->

        <button (click)="acumular(base)"> {{base}} </button>

        <span> {{numero}}  </span>

        <button (click)=" acumular(-base) "> {{-base}} </button>

        <!-- ahora se va a agregar un envento al boton +1
        se hace asi   : tomando esta instruccion
        <button> +1 </button>
        queda asi: 

        <button (click)="numero = numero +1 ;"> +1 </button>
        este evento hace un conteo ascendente que incrementa en 1
        cada vez que se oprime click -->

        <!-- el metodo sumar del archivo app.component.ts se 
        va a ejecutar en el evento click del boton 
        asi :
        <button (click)="sumar()"> +1 </button>

        se hace lo mismo con el metodo restar 

        -->


            
        
        
    `

})
export class ContadorComponent {

    titulo:string = 'Contador App';
    numero: number=10;
    base: number=5;
    //sumar() {
        // se usa la palabra reservada this
        // para referenciar la propiedad numero
        // de la clase AppComponent
    // this.numero= this.numero+1;
        // es esquivalente a this.numero +=1;

    

    // }
    // restar () {
    //   this.numero-=1;
    // }

    // se va a crear una funcion llamada acumular
    // que hara las funciones de sumar y/o restar 
    // segun el numero que reciba como argumento
    // por lo tanto sumar y restar seran reemplazadas
    // el argumento que recibe se llama valor 
    acumular( valor: number){
        this.numero +=valor;
        // 

    }

   


}