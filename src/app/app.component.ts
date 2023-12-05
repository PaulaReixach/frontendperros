// app.component.ts

import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from './elasticsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontendperros';
  elasticsearchInfo: any;
  searchData: any[] = [];

  constructor(private elasticsearchService: ElasticsearchService) {}

  ngOnInit() { //Para el inicio de la app, hay un search de 'apple' y probar si hay conex, cambiar a lo q queramos
    this.checkConnection();
    this.search('Toby');
  }

  checkConnection() { //Comprobacion de k hay conexión
    this.elasticsearchService.getInfo().subscribe(
      (data) => {
        this.elasticsearchInfo = data;
        console.log('Connection to Elasticsearch established:', this.elasticsearchInfo);
        console.log('Raw data from Elasticsearch:', data); // Agrega esta línea para imprimir los datos brutos
      },
      (error) => {
        console.error('Error connecting to Elasticsearch:', error);
      }
    );
  }

  search(query: string) { //Busqueda del item que queramos
    // Realiza la búsqueda utilizando el servicio y maneja la respuesta
    this.elasticsearchService.search(query).subscribe(
      (data: any) => {
        this.searchData = data;
        console.log('Data from Elasticsearch:', this.searchData);
      },
      (error) => {
        console.error('Error searching in Elasticsearch:', error);
      }
    );
  }
}
