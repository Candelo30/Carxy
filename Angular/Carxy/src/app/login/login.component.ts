import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      alert('Login exitoso');
      this.router.navigate(['/inicio']);
      this.username = '';
      this.password = '';
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
      this.username = '';
      this.password = '';
      
    }
  }
}
