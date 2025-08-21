import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html', 
  styleUrls: ['./app.css'] 
})
export class AppComponent {
  title = 'week4';

  constructor(private router: Router) {} 

  onLogout() {
    localStorage.removeItem('currentUser'); 
    this.router.navigate(['/login']);   
  }
}