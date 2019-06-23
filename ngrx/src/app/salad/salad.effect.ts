import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';
import { SaladActionTypes, AddChoices } from './salad.actions';
import { OrderService } from '../order.service';

@Injectable()
export class SaladEffect {
  @Effect()
  confirmOrder$: Observable<Action> = this.actions$.pipe(
    ofType(SaladActionTypes.LoadChoices),
    mergeMap(action =>
      this.orderService.loadChoices().pipe(map(choices => (choices ? new AddChoices(choices) : new AddChoices([]))))
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
