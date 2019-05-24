import { Action } from '@ngrx/store';

export enum SaladActionTypes {
  AddTopping = '[salad] add topping',
  StartOver = '[salad] start over',
  AddChoices = '[salad] add choices',
  LoadChoices = '[salad] load choices'
}

export class AddTopping implements Action {
  readonly type = SaladActionTypes.AddTopping;
  constructor(public payload: { name: string; price: number }) {}
}

export class StartOver implements Action {
  readonly type = SaladActionTypes.StartOver;
}

export class AddChoices implements Action {
  readonly type = SaladActionTypes.AddChoices;
  constructor(public payload: Array<{ name: string; price: number }>) {}
}

export class LoadChoices implements Action {
  readonly type = SaladActionTypes.LoadChoices;
}

export type SaladActionUnion = AddTopping | StartOver | AddChoices | LoadChoices;
