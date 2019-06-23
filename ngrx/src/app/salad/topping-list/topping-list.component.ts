import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AddTopping } from '../salad.actions';

@Component({
  selector: 'topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent implements OnInit {
  choices$: Observable<string[]>;

  toppings$: Observable<string[]>;
  price$;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.toppings$ = this.store.pipe(select(state => state.salad.toppings));
    this.price$ = this.store.pipe(select(state => state.price));
    this.choices$ = this.store.pipe(select(state => state.salad.choices));
  }

  add(choice) {
    this.store.dispatch(new AddTopping(choice));
  }
}
