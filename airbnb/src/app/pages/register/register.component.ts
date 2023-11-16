import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRequest } from '../../model/register-request ';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest :RegisterRequest = {};

}
