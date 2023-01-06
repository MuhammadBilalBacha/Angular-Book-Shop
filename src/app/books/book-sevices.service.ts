import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class BookSevicesService {
  getdata() {
    return [
      {
        name: 'Angular',
        author: 'Khan',
        amount: 100,
        src: 'https://miro.medium.com/max/480/1*9A6E9kaZZ54idy0HLSlh-A.png',
      },
      {
        name: 'React',
        author: 'Bilal',
        amount: 200,
        src: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
      },
      {
        name: 'Vue',
        amount: 50,
        author: 'Musa',
        src: 'https://i.ytimg.com/vi/DsuTwV0jwaY/maxresdefault.jpg',
      },
    ];
  }

  constructor() {}
}
