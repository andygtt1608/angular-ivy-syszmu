import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datos: personas[] = [
    { id: 1, nombre: "Andrea Fernanda", apellido: "Pérez Estrada", sexo: "Femenino"},
    { id: 2, nombre: "Juan Antonio", apellido: "Salazar Rodríguez", sexo: "Masculino"},
    { id: 3, nombre: "Cody", apellido: "Carson", sexo: "Masculino"},
    { id: 4, nombre: "Maxx", apellido: "Danzinger", sexo: "Masculino"},
    { id: 5, nombre: "Zach", apellido: "DeWall", sexo: "Masculino"},
  ];
}//fin clase

interface personas {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;

}
