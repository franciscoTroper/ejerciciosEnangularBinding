import { Component } from '@angular/core';
import { isObservable } from 'rxjs';

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.css'
})
export class Ejercicio6Component 
{
  resultado: number=0;
  numeros:string[] = [];
  
  signos: string[]=[];
  signoPulsado: boolean=false;
  contadorNumeros:number=0;
  
setNumeros(numero:string): void
{
  if((this.numeros[this.contadorNumeros]){
    this.numeros.push("");
  })
  this.numeros[this.contadorNumeros]+numero;
}
setsignos(signo:string):void{
  this.signos.push(signo);
  this.contadorNumeros++;
} 
  
  hacerOperacion():void{
    
      for(let i=0;i<this.numeros.length;i++){

        let num1 = Number(this.numeros[i]);
        let num2 = Number(this.numeros[i + 1]);
        if(A(num2)){}
        else{
        if(this.signos[i]=="+"){
          this.resultado=num1+num2;
        }
        if(this.signos[i]=="-"){
          this.resultado=num1-num2;
         
        }
        if(this.signos[i]=="x"){
          this.resultado=num1*num2;
        }
        if(this.signos[i]=="/"){
          this.resultado=num1/num2;
        }

        }
        
      }
  }
}



