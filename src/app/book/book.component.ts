import { CartService } from './../services/cart.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { book } from '../types/type';
interface book {
  name: string;
  src: string;
  author: string;
  amount: number;
}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  constructor(private CartService: CartService) {}
  @Input() check: book = {} as book;
  @Output() bookEmmiter = new EventEmitter<book>();
  // @Input() khan: book[] = [] ;
  // book : string = "";
  isShowing: boolean = false;
  clickHandler() {
    // console.log('Yes Clicked');
    // this.bookEmmiter.emit(this.check);
    this.CartService.addToCart(this.check);
    this.isShowing = true;
    // console.log(this.check);
  }
  deleteHandler() {
    this.CartService.removeCart(this.check);
    this.isShowing = false;
  }
  ngOnDestroy() {
    console.log({ name: 'destroy' });
  }
}
