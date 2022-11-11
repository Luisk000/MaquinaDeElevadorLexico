import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalisadorLexicoService {

  url = 'https://localhost:44309/Analisador/Analisar';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Credentials': 'true'
    })
  }

  analisar(texto: string){
    var body = {
      texto: texto
    }
    return this.http.post<string>(this.url, body, this.httpOptions);

  }
}
