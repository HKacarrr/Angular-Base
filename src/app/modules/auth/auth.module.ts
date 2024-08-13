import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import {SharedModule} from "../../shared/shared.module";
import {SubmitButtonComponent} from "../../shared/components/buttons/submit-button/submit-button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    SubmitButtonComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
