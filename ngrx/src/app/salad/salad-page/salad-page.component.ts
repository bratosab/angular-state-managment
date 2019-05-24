import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../shared/app.reducer';
import { StartOver } from '../salad.actions';
import { selectDressing } from '../salad.reducer';

@Component({
  selector: 'salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {
  salad$: Observable<any>;
  dressing$: Observable<string>;
  price$: Observable<number>;
  toppings$: Observable<string[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.toppings$ = this.store.pipe(select(state => state.salad.toppings));
    this.salad$ = this.store.pipe(select(state => state.salad));
    this.price$ = this.store.pipe(select(state => state.salad.price));

    this.dressing$ = this.store.pipe(select(selectDressing));
  }

  startOver() {
    this.store.dispatch(new StartOver());
  }
}
