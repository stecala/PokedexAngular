import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyService {
  url : string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient){}


  getPokemonList(request: any): Observable<any[]>{
    return this.http.get<any>(this.url+request);
  }

  getSinglePokemon(name: string): Observable<any[]>{
    return this.http.get<any>(this.url+'pokemon/'+name);
  }
}
