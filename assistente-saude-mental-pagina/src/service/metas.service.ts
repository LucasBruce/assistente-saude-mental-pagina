import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {basePath} from '../environment/api-brainly'
import { Observable, delay, retry } from 'rxjs';
import { Metas } from 'src/app/models/metas';
import { MetaUsuarios } from 'src/app/models/metaUsuarios';

@Injectable({
  providedIn: 'root'
})
export class MetasService {

  private metasApi: string;
  private finalPath: string;
  private metaPath: string;

  constructor(private http: HttpClient) {
    this.finalPath = "";
    this.metasApi = basePath.url.concat("usuarios/metas/usuario/{idusuario}/data/{datapesquisada}");
    this.metaPath = basePath.url.concat("metas/")
   }

   public findAllMetasByUsuarioId(): Observable<MetaUsuarios[]> {
      this.finalPath = this.metasApi.replace("{idusuario}", "1").replace("{datapesquisada}", "2023-03-01");
      let result =  this.http.get<MetaUsuarios[]>(this.finalPath)
      .pipe(
        retry(5),
        delay(100)
      )
      return result;
   }

   public findMetaByMetaId(id: number): Observable<Metas> {
    let metaParaOId = this.metaPath.concat(String(id));
    return this.http.get<Metas>(metaParaOId)
    .pipe(
      retry(5),
      delay(100)
    )
   }
}
