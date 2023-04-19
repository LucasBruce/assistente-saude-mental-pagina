import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) { }

  fazerRequisicao(path = 'metas') {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //Authorization: `Bearer semtken`
      })
    };

    //const url = 'http://localhost:8081/usuarios/metas';
    //const url = 'http://localhost:8081/usuarios/metas/usuario/1/data/2023-04-19';

    const url = 'http://localhost:8081/'+path;
    return this.http.get(url, httpOptions);
  }
}