// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user = {
    login: '',
    password: '',
  };
  private url = `${environment.apiUrl}\login`
  constructor(private http: HttpClient) {}

  onSubmit() {
    // Make an HTTP POST request to your backend for authentication
    this.http.post(this.url, this.user).subscribe(
      (data: any) => {
        // Assuming your backend returns a JWT token
        const token = data.token;
        // Store the token securely (e.g., in a service or local storage)
        localStorage.setItem('token', token);
        // Redirect to a protected route or perform other actions as needed
      },
      (error) => {
        console.error('Login failed', error);
        // Handle login error, e.g., display an error message
      }
    );
  }
}
