import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { saladReducer } from './salad.reducer';
import { ToppingListComponent } from './topping-list/topping-list.component';

const routes: Routes = [
  // { path: 'order', component: SaladPageComponent }
];

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('salad', saladReducer)],
  declarations: [ToppingListComponent, SaladPageComponent]
})
export class SaladModule {}
