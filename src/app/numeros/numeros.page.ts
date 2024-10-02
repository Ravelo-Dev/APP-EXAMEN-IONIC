import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  constructor() { }
  numero1: number = 0;
  numero2: number = 0;
  numero3: number = 0;

  mayor: number = 0;
  menor: number= 0;
  promedio: number = 0;

  calcular(){
    const numeros = [this.numero1, this.numero2, this.numero3];
       this.mayor = Math.max(...numeros);
       this.menor = Math.min(...numeros);
       this.promedio = numeros.reduce((a, b) => a + b, 0) / numeros.length;
  }

  ngOnInit() {
  }

}
