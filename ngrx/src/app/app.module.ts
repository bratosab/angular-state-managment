import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterStateSnapshot } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer } from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './order.service';
import { SaladModule } from './salad/salad.module';
import { saladReducer } from './salad/salad.reducer';
import { AppEffects } from './shared/app.effects';
import { appReducer } from './shared/app.reducer';
import { RouterEffects } from './shared/router.effects';

export class CustomSerializer implements RouterStateSerializer<string> {
  serialize(routerState: RouterStateSnapshot): string {
    return routerState.url;
  }
}

export const reducers: ActionReducerMap<any> = {
  salad: saladReducer,
  app: appReducer
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SaladModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    EffectsModule.forRoot([RouterEffects, AppEffects])
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
