import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
/*EJERCICIO 1: CÁLCULO EN LA VISTA USANDO INTERPOLACIÓN
Descripción: En este ejercicio, usarás interpolación para mostrar el resultado de una
operación matemática realizada en el componente, directamente en la vista.
Instrucciones:
Declara dos propiedades numero1 y numero2 en tu componente.
Usa interpolación en la vista para mostrar el resultado de la suma de estos dos
números.
ONE WAY BINDING - PROPIEDA*/ 
  numero1 = 5;
  numero2 = 10;
}
