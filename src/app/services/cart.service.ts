import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
interface book {
  name: string;
  src: string;
  author: string;
  amount: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private router: Router) {}

  cart: Array<book> = [];

  addToCart(book: any) {
    console.log(this.cart);
    this.cart.push(book);
  }
  removeCart(book: any) {
    this.cart = this.cart.filter((b) => b.name !== book.name);
  }

  user: any = null;
  login: boolean = false;

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if (this.user !== null) {
      this.login = true;
    }
  }
}
