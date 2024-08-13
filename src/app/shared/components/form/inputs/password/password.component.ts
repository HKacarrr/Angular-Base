import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {
  @Input() inputId?:string
  @Input() placeholder?:string
  @Input() labelText?:string
  @Input() customMainDivClass?:string
  @Input() customInputClass?:string
}
