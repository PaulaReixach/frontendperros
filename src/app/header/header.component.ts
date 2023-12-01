import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  terminosDeBusqueda: string[] = [];


  buscarPorTecla(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement;
      const terminoDeBusqueda = inputElement.value;
      this.terminosDeBusqueda.push(terminoDeBusqueda);
      const resultadoElement = document.getElementById('resultado');
      if (resultadoElement) {
        resultadoElement.textContent = 'Has escrito: ' + this.terminosDeBusqueda.join(', '); // Muestra los términos de búsqueda en la pantalla
      }
      inputElement.value = ''; // Limpia el campo de búsqueda
    }
  }

  buscarPorClic() {
    const inputElement = document.querySelector('input[placeholder="Buscar"]') as HTMLInputElement;
    const terminoDeBusqueda = inputElement.value;
    this.terminosDeBusqueda.push(terminoDeBusqueda);
    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
      resultadoElement.textContent = 'Has escrito: ' + this.terminosDeBusqueda.join(', '); // Muestra los términos de búsqueda en la pantalla
    }
    inputElement.value = ''; // Limpia el campo de búsqueda
  }


}
