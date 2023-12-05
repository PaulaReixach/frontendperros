import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ElasticsearchService {
  //Cada url va empezar por /api
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  //Query para pillar info por ejemplo /api/check (que se encuentra en el back)
  getInfo(): Observable<any> {
    // Cambia de GET a POST
    return this.http.post<any>(`${this.apiUrl}/check`, {});
    //return this.http.get<any>(`http://localhost:3000/check`);
  }

  //Query para obtener un objeto /api/search+item (está en el back también)
  search(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search?query=${query}`);
    //return this.http.get<any>(`http://localhost:3000/search?query=${query}`);
  }
}
