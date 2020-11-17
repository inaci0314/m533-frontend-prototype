import { Injectable } from '@angular/core';
// import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }

  addToCart(article, quantity) {
    this.items.push([article, quantity]);
    window.alert(article.name + " added to the cart!");
  }

  getItems() {
    console.log(this.items);
    return this.items;
  }

  clearCart() {
    this.items = []
    return this.items;
  }
}
