import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  baseUrl = 'http://private-59658d-celulardireto2017.apiary-mock.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  getPlataformList(url: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${url}`);
  }

  getPlansById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/planos/${id}`);
  }



}
