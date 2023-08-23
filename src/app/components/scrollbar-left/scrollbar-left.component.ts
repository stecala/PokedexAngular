import { Component } from '@angular/core';
import { HttpProxyService } from 'src/app/services/http-proxy.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-scrollbar-left',
  templateUrl: './scrollbar-left.component.html',
  styleUrls: ['./scrollbar-left.component.scss']
})
export class ScrollbarLeftComponent {

  allPokemonPath : string = 'pokemon?limit=20&offset=0';
  list: any = {};
  nameList: any = [];
  pokemonList : any = [];
  pokemons : any = [];
  areArived : boolean = false;

  constructor(private http: HttpProxyService){
    Promise.resolve().then(()=>{
      this.list = this.http.nameGet(this.allPokemonPath);
      return this.list;
    }).then(()=>{
      this.nameList = this.list.__zone_symbol__value.results;
      //console.error(this.nameList);
      this.PokemonsFunction(this.nameList);
    }).then(()=>{
      this.areArived = true;
    }).catch((err) => {
      console.error(err);
    })

  }


  PokemonsFunction(arr : []){
    arr.forEach((element : any) => {
      Promise.resolve().then(()=>{
        return this.http.singlePokemonGet(element.url)
      }).then((res) =>{
        this.pokemons.push(res);
        return this.pokemons;
      }).then(()=>{
        this.pokemons.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id)
        return this.pokemons;
      })
    }); 
  }
}
