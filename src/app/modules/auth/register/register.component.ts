import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../core/services/HttpClient/http-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient:HttpClientService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      registerName: ["", [Validators.required]],
      registerSurname: ["", [Validators.required]],
      registerMail: ["", [Validators.required, Validators.email]],
      registerPassword: ["", [Validators.required, Validators.minLength(8)]],
      registerPasswordRep: ["", [Validators.required, Validators.minLength(8)]],
      registerGender: ["", [Validators.required]],
      registerBirthdate: ["", [Validators.required]],
      registerCheckAgreement: ["", [Validators.required]],
    });
  }

  nameInputAttr = {
    id: 'register-name',
    placeholder: 'Name',
    labelText: 'Name',
    inputName: 'registerName',
    formControlName: 'registerName',
    validationMessage: 'Name is required',
    type: 'text'
  }


  surnameInputAttr = {
    id: 'register-surname',
    placeholder: 'Surname',
    labelText: 'Surname',
    inputName: 'registerSurname',
    formControlName: 'registerSurname',
    validationMessage: 'Surname is required',
    type: 'text'
  }


  emailInputAttr = {
    id: 'register-email',
    placeholder: 'test.kodpit@kodpit.com',
    labelText: 'E-Mail',
    inputName: 'registerMail',
    formControlName: 'registerMail',
    validationMessage: 'E-Mail is required',
    type: 'email'
  }


  submitButtonAttr = {
    submitButtonId: 'register-submit-btn',
    buttonText: 'Sign Up'
  }

  register(){
    if (this.registerForm.valid){
      console.log("Form Valid");
      console.log("Data : ", this.registerForm.value);
    }
  }
}
