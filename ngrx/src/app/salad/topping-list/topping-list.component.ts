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
  choices = ['Olives', 'Tomatoes', 'Croutons', 'Pickles', 'Shrimp', 'Pepitas', 'Carrots'];

  toppings$: Observable<string[]>;
  price$;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.toppings$ = this.store.pipe(select(state => state.salad.toppings));
    this.price$ = this.store.pipe(select(state => state.price));
  }

  add(name) {
    this.store.dispatch(new AddTopping(name));
  }
}
