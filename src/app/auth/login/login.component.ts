import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';
import { CryptoServiceLS } from 'app/services/crypto/crypto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cryptUtil: CryptoServiceLS
  ) {
    if(localStorage.getItem('accessToken')){
      router.navigate(['/app/dashboard']);
    }
  }

  ngOnInit(): void {
  }

  startLogin(){
    const username: string = this.loginForm.get('username').value;
    const password: string = this.loginForm.get('password').value;
    this.authService.sendLogin(username, password).subscribe(
      ({ data }) => {
        if(this.processingLogin(data)){
          this.router.navigate(['/app/dashboard']);
        };
      }
    )
  }

  processingLogin({status, access_token, userName}): boolean{
    if(status === 200 && access_token){
      this.cryptUtil.storeData('username', userName)
      this.cryptUtil.storeData('accessToken', access_token)
      return true;
    } else {
      return false;
    }
  }

  resetForm(){
    this.loginForm.reset();
  }
}