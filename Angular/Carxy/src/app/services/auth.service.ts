import { Injectable } from '@angular/core';
import { SharedService } from './shared-service.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios = [
    { email: 'user1@example.com', nombre: 'user1', contrasena: 'password1' },
    { email: 'user2@example.com', nombre: 'user2', contrasena: 'password2' }
  ];

  private usuarioActual: any = null;

  constructor(private sharedService: SharedService) {}

  login(nombre: string, contrasena: string): boolean {
    const usuario = this.usuarios.find(user => user.nombre === nombre && user.contrasena === contrasena);
    if (usuario) {
      this.usuarioActual = usuario;
      this.sharedService.notifyLogin(); // Notifica el inicio de sesión
      return true;
    }
    return false;
  }

  getUsuarioActual() {
    return this.usuarioActual;
  }

  logout() {
    this.usuarioActual = null;
    this.sharedService.notifyLogout();  // Notifica el cierre de sesión
  }
}
