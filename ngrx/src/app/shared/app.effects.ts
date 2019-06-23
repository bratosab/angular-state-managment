import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';
import { OrderService } from '../order.service';
import { AppActionTypes, OrderFailed, OrderSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  @Effect()
  confirmOrder$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.ConfirmOrder),
    mergeMap(action =>
      this.orderService.post().pipe(map(success => (success ? new OrderSuccess() : new OrderFailed())))
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
