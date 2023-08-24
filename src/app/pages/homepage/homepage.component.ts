import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  protected pokemon : any = [];
  protected isClicked : boolean = false;
  constructor(){}

  storePokemon(element: any) : void{
    this.pokemon = element ;
    this.isClicked = true;
  }
}
