import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  standalone: true,
  styleUrl: './mail.component.css'
})
export class MailComponent {
  @Input() placeholder?:string;
  @Input() inputId?:string;
  @Input() customInputClass?:string;
  @Input() customLabelClass?:string;
  @Input() labelText?:string;
  @Input() inputName?:string;
  @Input() parentForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.parentForm = this.fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
    })
  }
}
