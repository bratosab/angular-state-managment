import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SaladActionTypes, SaladActionUnion } from './salad.actions';

export interface SaladState {
  dressing: string;
  price: number;
  toppings: Array<{ name: string; price: number }>;
  choices: Array<{ name: string; price: number }>;
}

const initialState: SaladState = {
  dressing: 'ranch',
  price: 9.99,
  toppings: [],
  choices: []
};

export function saladReducer(state: SaladState = initialState, action: SaladActionUnion): SaladState {
  switch (action.type) {
    case SaladActionTypes.AddTopping:
      const toppings = [...state.toppings, action.payload];
      return {
        ...state,
        toppings,
        price: state.price + action.payload.price
      };

    case SaladActionTypes.StartOver:
      return { ...initialState };

    case SaladActionTypes.AddChoices:
      const c = [...state.choices, ...action.payload];
      return {
        ...state,
        choices: c
      };

    default:
      return state;
  }
}

export const selectFeature = createFeatureSelector<any>('salad');
export const selectDressing = createSelector(
  selectFeature,
  (state: SaladState) => state.dressing
);
