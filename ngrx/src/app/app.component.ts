import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ConfirmOrder, SetUsername } from './shared/app.actions';
import { AppState } from './shared/app.reducer';
import { Navigate } from './shared/router.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state$: Observable<AppState>;
  username: string;

  constructor(private store: Store<AppState>) {
    this.state$ = store.select(state => state);
  }

  clickHandler(username) {
    this.store.dispatch(new SetUsername(username));
    this.store.dispatch(new Navigate('salad/order'));
  }

  confirm() {
    this.store.dispatch(new ConfirmOrder());
  }
}
