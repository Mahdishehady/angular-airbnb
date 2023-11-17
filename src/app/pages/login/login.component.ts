import { Component, ɵɵresolveBody } from '@angular/core';
import {AuthenticationRequest} from "../../model/authentication-request";
import {AuthenticationResponse} from "../../model/authentication-response";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../model/verification-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  authenticate() {
    this.authService.login(this.authRequest)
    .subscribe(({ body }) => {
          this.authResponse = body;
          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', body.token as string);
            this.router.navigate(['welcome']);
          }
        }
      );
  }

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)  
    .subscribe(({ body }) => {
          localStorage.setItem('token', body.token as string);
          this.router.navigate(['welcome']);
        }
      );
  }
}