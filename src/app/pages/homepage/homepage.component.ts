import { Component, OnInit } from '@angular/core';
import { HttpProxyService } from 'src/app/services/http-proxy.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  url : string = 'https://pokeapi.co/api/v2/';
  allPokemonPath : string = 'pokemon?limit=20&offset=0';
  list: any = {};
  constructor(private http: HttpProxyService){};

  ngOnInit(){
    this.http.getPokemonList(this.url, this.allPokemonPath).subscribe((data: any[]) => {
      this.list = data;
    })
  }
}
