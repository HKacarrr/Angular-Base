import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientService} from "../../../core/services/HttpClient/http-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html'
})
export class LoginComponent{
  loginForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClientService: HttpClientService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      loginEmail: ["", [Validators.required, Validators.email]],
      loginPassword: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  emailInputAttr = {
    id: 'login-mail',
    placeholder: 'name@example.com',
    labelText: 'E-Mail Address',
    inputName: 'loginEmail',
    formControlName: 'loginEmail',
  }

  passwordInputAttr = {
    id: 'login-password',
    placeholder: '',
    labelText: 'Password',
    inputName: 'loginPassword',
    formControlName: 'loginPassword'
  }

  submitButtonAttr = {
    submitButtonId: 'login-submit-btn',
    buttonText: 'Log In'
  }

  login()
  {
    if (this.loginForm.valid){
      let formData = this.loginForm.value;
      this.httpClientService.post('http://127.0.0.1:8001/api/login', formData).subscribe(data => {
        let token = JSON.parse(JSON.stringify(data)).user.token;
        localStorage.setItem("token", token);
        this.router.navigate(['main/dashboard']).then(r => console.log("Dashboard")).catch(e => console.log("Error : ", e));
      })
    }
  }
}
