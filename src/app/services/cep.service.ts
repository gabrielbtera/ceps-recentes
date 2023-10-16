import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataCep } from '../model/data-cep';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private url = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  getCep(cepPath: string): Observable<DataCep> {
    const urlPath = `${this.url}${cepPath}/json/`;
    return this.http.get<DataCep>(urlPath);
  }
}
