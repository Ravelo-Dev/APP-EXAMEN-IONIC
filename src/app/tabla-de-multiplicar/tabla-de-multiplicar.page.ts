import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-de-multiplicar',
  templateUrl: './tabla-de-multiplicar.page.html',
  styleUrls: ['./tabla-de-multiplicar.page.scss'],
})
export class TablaDeMultiplicarPage implements OnInit {

  constructor() { }
  numero: number = 1;
  tablaVisible: boolean = false;
  rango: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  MostrarTabla() {
    this.tablaVisible = true;
  }
  ngOnInit() {
  }

}
