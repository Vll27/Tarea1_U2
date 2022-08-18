import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  title = 'Mi primera Calculadora';

     num1!: number;
     num2!: number;
     num3!: number;

  sumar(){
    this.num3=this.num1+this.num2;
  }

  restar(){
    this.num3=this.num1-this.num2;
  }

  multiplicar(){
    this.num3=this.num1*this.num2;
  }

  dividir(){
    this.num3=this.num1/this.num2;
  }
}
