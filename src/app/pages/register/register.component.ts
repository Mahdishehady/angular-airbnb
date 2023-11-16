import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../model/authentication-request";
import {AuthenticationResponse} from "../../model/authentication-response";

import {Router} from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RegisterRequest } from '../../model/register-request ';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response :AuthenticationResponse) => {
          if (response) {
            this.authResponse = response;
            console.log(response.secretImageUri);
            
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }

 
}