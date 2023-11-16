import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../model/register-request ';
import { AuthenticationResponse } from '../model/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl: string ="http://localhost:8080/api/auth"

  constructor(
    private http :HttpClient
  ) { }

  register(
    registerRequest : RegisterRequest
  ){
    return this.http.post<AuthenticationResponse>
    (`${this.baseUrl}/register`,registerRequest)

  }
}
