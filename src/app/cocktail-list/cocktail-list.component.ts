import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {

  cocktails: any;
  arrayCocktails: any;

  constructor(private cocktail: CocktailService) {
  }

  ngOnInit() {
    this.cocktails = this.cocktail.getCocktails();
    this.arrayCocktails = Object.entries(this.cocktails);
    // console.log(Object.entries(this.cocktails));
  }

}
