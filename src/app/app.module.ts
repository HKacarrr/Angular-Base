import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./modules/auth/auth.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MainModule} from "./modules/main/main.module";
import {CoreModule} from "./core/core.module";
import {MainRoutingModule} from "./modules/main/main-routing.module";
import {DatePipe} from "@angular/common";
import {provideHttpClient, withFetch} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    CoreModule,
    MainModule,
    MainRoutingModule,
    // StoreModule.forRoot({}, {})
  ],
  providers: [
    DatePipe,
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
