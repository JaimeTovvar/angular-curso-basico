import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/Contador.Module';


// dentro de las declaraciones van todos los componentes
@NgModule({
  declarations: [
    AppComponent,
  //  ContadorComponent,
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// git remote add origin https://github.com/JaimeTovvar/angular-curso-basico.git
// git branch -M main
// git push -u origin main