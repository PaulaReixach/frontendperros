import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  elasticQuery: string = ''; // Change the type to string
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
        this.elasticQuery += `${terminoDeBusqueda} `;
      }
      if (this.elasticQuery.trim() !== '') {
        // Trim the string before passing it to the search method
        this.appComponent.search(this.elasticQuery.trim());
      }
      inputElement.value = ''; // Limpia el campo de búsqueda
    }
  }

  buscarPorClic() {
    const inputElement = document.querySelector('input[placeholder="Buscar"]') as HTMLInputElement;
    const terminoDeBusqueda = inputElement.value.trim();
    if (terminoDeBusqueda !== '') {
      this.terminosDeBusqueda.push(terminoDeBusqueda);
      this.elasticQuery += `${terminoDeBusqueda} `;
    }
    /*if (this.terminosDeBusqueda.length > 0){
      for (const term of this.terminosDeBusqueda) {
        this.appComponent.search(term);
      }
      this.appComponent.search(terminoDeBusqueda);
    }*/
    if (this.elasticQuery.trim() !== '') {
      // Trim the string before passing it to the search method
      this.appComponent.search(this.elasticQuery.trim());
    }
    inputElement.value = ''; // Limpia el campo de búsqueda
  }

  eliminarTerminoDeBusqueda(terminoDeBusqueda: string) {
    const index = this.terminosDeBusqueda.indexOf(terminoDeBusqueda);
    if (index >= 0) {
      this.terminosDeBusqueda.splice(index, 1);
      // Actualiza elasticQuery
      this.elasticQuery = this.terminosDeBusqueda.join(' ');
      // Realiza una nueva búsqueda con los términos de búsqueda actualizados
      if (this.elasticQuery.trim() !== '') {
        this.appComponent.search(this.elasticQuery.trim());
      } else {
        // Si no hay términos de búsqueda, limpia los resultados de la búsqueda
        this.appComponent.clearSearchResults();
      }
    }
  }



}
