import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktail = {
    name: "cocktail test",
    price: 22,
    image: "src image"
  }

  constructor() { }

  getCocktails() {
    return this.cocktail;
    // console.log('test service: ça marche nickel!!');
  }
}
