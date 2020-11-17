import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
// import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  STORAGE_KEY = 'cartItems';
  items = [];

  constructor(private storage: LocalStorageService) { }

  addToCart(article, quantity) {
    let newItem = true;
    // If the item is already in the cart, only modify the quantity
    for(let i = 0; i < this.items.length; i++)
    {
      if (this.items[i][0].id = article.id)
      {
        this.items[i][1] += quantity;
        newItem = false;
        break;
      }
    }
    // Else, add it
    if (newItem)
      this.items.push([article, quantity]);

    this.storage.store(this.STORAGE_KEY, this.items);
    window.alert(article.name + " added to the cart!");
  }

  getItems() {
    this.items = this.storage.retrieve(this.STORAGE_KEY);

    if (this.items == null)
      this.items = [];
    
      return this.items;
  }

  clearCart() {
    this.items = []
    this.storage.clear();
    return this.items;
  }
}
