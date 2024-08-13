import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './components/form/inputs/text/text.component';
import { PasswordComponent } from './components/form/inputs/password/password.component';
import {SubmitButtonComponent} from "./components/buttons/submit-button/submit-button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputErrorComponent } from './components/form/inputs/input-error/input-error.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import {RouterLink} from "@angular/router";
import { DateFormatterPipe } from './pipes/DateFormatter/date-formatter.pipe';



@NgModule({
  declarations: [
    TextComponent,
    PasswordComponent,
    InputErrorComponent,
    PageNotFoundComponent,
    DateFormatterPipe
  ],
    exports: [
        PasswordComponent,
        InputErrorComponent,
        DateFormatterPipe,
        TextComponent
    ],
  imports: [
    CommonModule,
    SubmitButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ]
})
export class SharedModule { }
