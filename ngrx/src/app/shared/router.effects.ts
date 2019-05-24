import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { RouterActionTypes } from './router.actions';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.Navigate),
    map((action: any) => action.payload),
    tap(path => {
      console.log(path);
      this.router.navigate([path]);
    })
  );

  constructor(private actions$: Actions, private router: Router) {}
}
