import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  standalone: true,
  styleUrl: './submit-button.component.css'
})
export class SubmitButtonComponent {
  @Input() customButtonClass?:string;
  @Input() submitButtonId?:string;
  @Input() buttonText?:string;
}
