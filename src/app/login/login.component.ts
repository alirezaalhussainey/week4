import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Required for ngModel

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true, // Mark as standalone
  imports: [FormsModule] // Import FormsModule if standalone
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const validUsers = [
      { email: 'alireza.alhussainey@griffithuni.edu.au', password: 'password1' },
      { email: 'alireza.alhussainey@griffithuni.edu.au', password: 'pass' },
      { email: 'alireza.alhussainey@griffithuni.edu.au', password: 'pass123' }
    ];

    const user = validUsers.find(user => user.email === this.email && user.password === this.password);

    if (user) {
      this.router.navigate(['/account']);
    } else {
      alert('Invalid credentials, please try again.');
    }
  }
}
