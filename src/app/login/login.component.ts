import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-mobile.component.scss', './login-tablet.component.scss'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  pass = new FormControl('', [Validators.required, Validators.minLength(8)]);

  hide = true;
  constructor() {}

  ngOnInit(): void {}
}
