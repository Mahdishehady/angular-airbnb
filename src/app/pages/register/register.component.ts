import { Component } from '@angular/core';
import { RegisterRequest } from '../../model/register-request ';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest :RegisterRequest = {};

}
