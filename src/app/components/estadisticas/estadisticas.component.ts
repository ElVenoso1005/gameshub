/*
4.1.
1. En que archivo se define la interfaz del juego?
en el src/app/interfaces/juego.interface.ts
2.Que archivo maneja el estado global de los filtros?
en el src/app/components/lista-juegos/lista-juegos.component.ts
3. Donde se configura el HttpClient para la aplicacion?
En el main
*/ 
/*
4.2.
1. Por que este proyecto no tiene app.module.ts?
Porque la app usa standalone
2. Que ventaja tiene usar BehaviorSubject en el servicio de juegos?
Se mantiene el estado actual de filtros y siempre da el valor actual.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {

}
