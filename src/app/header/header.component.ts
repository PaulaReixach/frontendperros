import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  terminosDeBusqueda: string[] = [];

  //constructor(private elasticsearchService: ElasticsearchService) {}

  constructor(
    private appComponent: AppComponent
  ) {}
  buscarPorTecla(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement;
      const terminoDeBusqueda = inputElement.value.trim();
      if (terminoDeBusqueda !== '') {
        this.terminosDeBusqueda.push(terminoDeBusqueda);
      }
      inputElement.value = ''; // Limpia el campo de búsqueda
    }
  }

  buscarPorClic() {
    const inputElement = document.querySelector('input[placeholder="Buscar"]') as HTMLInputElement;
    const terminoDeBusqueda = inputElement.value.trim();
    if (terminoDeBusqueda !== '') {
      this.terminosDeBusqueda.push(terminoDeBusqueda);
    }
    if (this.terminosDeBusqueda.length > 0){
      for (const term of this.terminosDeBusqueda) {
        this.appComponent.search(term);
      }
    }
    inputElement.value = ''; // Limpia el campo de búsqueda
  }

  eliminarTerminoDeBusqueda(terminoDeBusqueda: string) {
    const index = this.terminosDeBusqueda.indexOf(terminoDeBusqueda);

    if (index >= 0) {
      this.terminosDeBusqueda.splice(index, 1);
    }
  }

}
