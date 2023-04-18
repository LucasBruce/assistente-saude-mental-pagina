import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPath } from './../environment/api-path';
import { IOpenaiRequest, IOpenaiResponse } from './../model/entity-openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  headers = new HttpHeaders({'Content-Type':'application/json'})
  .set('Authorization', apiPath.apiKey)

  httpOptions = {
    headers: this.headers
  }

  constructor(private httpClient: HttpClient) { }

   execOpenai(
    request: IOpenaiRequest,
    callbackNext: (resposta: IOpenaiResponse) => void,
    callbackError?: (error: string) => void
    ): void {
    
     this.execPost<IOpenaiRequest, IOpenaiResponse>(
       apiPath.apiPathOpenai,
       request,
       this.httpOptions,
       callbackNext,
       callbackError
       );
  }

  private execPost<T, R>(
    url: string,
    requisicao?: T,
    httpOptions?: { headers: HttpHeaders },
    callbackNext?: (resposta: R) => void,
    callbackError?: (error: string) => void
  ): void {
    
    this.httpClient
      .post<R>(url, requisicao, httpOptions)
      .subscribe(callbackNext, (error: Error) => {
        console.error(error);
        if (callbackError) callbackError(error.message);
      });
  }
}
