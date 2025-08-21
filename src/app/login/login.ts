import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('http://localhost:3001/api/auth', { email: this.email, password: this.password }).subscribe(
      (response: any) => {
        console.log('API response:', response);
        if (response.valid) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.errorMessage = '';
          this.router.navigate(['/profile']);
        } else {
          this.errorMessage = response.message || 'Error Email or Password!';
        }
      },
      (error) => {
        this.errorMessage = 'Server error, please try again';
        console.error(error);
      }
    );  
  }
}
