import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyService {
  url : string = 'https://pokeapi.co/api/v2/';
  protected injector : Injector;
  protected httpClient : HttpClient;

  constructor(injector : Injector){
    this.injector = injector;
    this.httpClient = this.injector.get(HttpClient);
  }


  public nameGet(request : any){
    return new Promise<any>((resolve, reject) =>{
      lastValueFrom(this.httpClient.get(this.url+request, {})).then((res) => {
        return resolve(res);
      }).catch((err) => {
        return reject(err)
      })
    })
  }

  public singlePokemonGet(urlSingle: string){
    return new Promise<any>((resolve, reject) =>{
      lastValueFrom(this.httpClient.get(urlSingle, {})).then((res) => {
        //console.log(res)
        return resolve(res);
      }).catch((err) => {
        return reject(err)
      })
    })
  }

}
