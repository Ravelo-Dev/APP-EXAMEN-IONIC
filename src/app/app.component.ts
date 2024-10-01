import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Presentacion', url: '/inicio', icon: 'home' },
    { title: 'Tabla de Multiplicar', url: '/tabla-de-multiplicar', icon: 'list' },
    { title: 'Numeros', url: '/numeros', icon: 'calculator' },

  ];
  
  constructor() {}
}
