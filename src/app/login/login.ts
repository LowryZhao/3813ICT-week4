import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

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

  users = [
    { email: '123@qq.com', password: '123'},
    { email: '456@qq.com', password: '456'},
    { email: '789@qq.com', password: '789'}
  ];

  login() {
    console.log('Email input:', this.email, 'Password input:', this.password);
    const matchedUser = this.users.find(user => user.email === this.email && user.password === this.password);
    console.log('Matched User:', matchedUser);
    if (matchedUser) {
      this.errorMessage = '';
      this.router.navigate(['/profile']);
    } else {
      this.errorMessage = 'Error Email or Password!';
    }
  }

  constructor(private router: Router) {}
}