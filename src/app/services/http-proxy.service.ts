import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyService {

  constructor(private http: HttpClient){}


  getPokemonList(url : string, request: any): Observable<any[]>{
    return this.http.get<any>(url+request);
  }

}
