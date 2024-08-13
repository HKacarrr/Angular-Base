import {Component, Input} from '@angular/core';
import {AbstractControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.css'
})
export class InputErrorComponent {
  @Input() errorMessage:string = '';
  @Input() customErrorTextClass:string = '';
}
