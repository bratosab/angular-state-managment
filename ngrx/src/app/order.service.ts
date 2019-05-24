import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  constructor() {}

  post() {
    return of(Math.random() >= 0.5).pipe(delay(2000));
  }

  loadChoices(): Observable<Array<{ name: string; price: number }>> {
    return of([
      {
        name: 'tomates',
        price: 1
      },
      {
        name: 'bacon',
        price: 2
      },
      {
        name: 'olives',
        price: 0.5
      },
      {
        name: 'fromages',
        price: 1
      },
      {
        name: 'biere',
        price: 10
      },
      {
        name: 'bonbons',
        price: 0
      },
      {
        name: 'feta',
        price: 3.5
      },
      {
        name: 'piment',
        price: 0.75
      }
    ]);
  }
}
