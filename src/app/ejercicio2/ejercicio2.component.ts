import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
/*
ONE WAY BINDING - PROPIEDAD
EJERCICIO 2: CAMBIAR EL COLOR DE UN TEXTO DINÁMICAMENTE
Descripción: En este ejercicio, vas a utilizar property binding para cambiar
dinámicamente el color del texto según un valor definido en el componente.
Instrucciones:
1. Crea una propiedad llamada color en el archivo
TypeScript.
2. Usa binding para cambiar el color del texto según la propiedad color. Tip –
style.color*/ 
color: string = 'blue';

}




