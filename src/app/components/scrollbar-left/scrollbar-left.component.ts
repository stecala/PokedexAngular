import { Component } from '@angular/core';
import { HttpProxyService } from 'src/app/services/http-proxy.service';

@Component({
  selector: 'app-scrollbar-left',
  templateUrl: './scrollbar-left.component.html',
  styleUrls: ['./scrollbar-left.component.scss']
})
export class ScrollbarLeftComponent {

  allPokemonPath : string = 'pokemon?limit=20&offset=0';
  list: any = {};
  nameList: any = [];
  pokemonInSidebar : any = [];
  nameImg: any = [];
  isFirstCall : boolean = true;

  constructor(private http: HttpProxyService){};

  ngOnInit(){
    this.http.getPokemonList(this.allPokemonPath).subscribe((data: any[]) => {
      this.list = data;
      this.getNameFromData();
      this.nameList.forEach((i : string)=>{
        this.http.getSinglePokemon(i).subscribe((data: any[]) => {
          this.pokemonInSidebar.push(data);
        })
      });
      setTimeout(() => {
        this.sortNameAndImg();
      }, 500);
    })
  }

  getNameFromData(): void{
    this.list.results.forEach((element: { name: any; }) => {
      this.nameList.push(element.name)
    });
  }

  sortNameAndImg():void{
    for(let i = 0; i<this.nameList.length ; i++){
      this.nameImg.push({
        name: this.nameList[i],
        img: this.pokemonInSidebar[i].sprites.front_default
      })
    }
  }
}
