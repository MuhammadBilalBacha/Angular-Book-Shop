// import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
// import { BooksComponent } from './books/books.component';
// import { BookComponent } from './book/book.component';
// import { BookSevicesService } from './books/book-sevices.service';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BooksModule,
    AuthModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
