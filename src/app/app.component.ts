import { CartService } from './services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(private CartService: CartService) {}

  getCarts() {
    return this.CartService.cart;
  }
  user() {
    return this.CartService.login;
  }
  logoutHandler() {
    localStorage.removeItem('user');
  }
}
