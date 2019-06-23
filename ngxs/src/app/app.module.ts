import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './order.service';
import { AppState } from './shared/app.state';
import { RouterState } from './shared/router.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([RouterState, AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
