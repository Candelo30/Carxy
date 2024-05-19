import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios = [
    { email: 'user1@example.com', nombre: 'user1', contrasena: 'password1' },
    { email: 'user2@example.com', nombre: 'user2', contrasena: 'password2' }
  ];

  private usuarioActual: any = null;

  constructor() { }

  login(nombre: string, contrasena: string): boolean {
    const usuario = this.usuarios.find(user => user.nombre === nombre && user.contrasena === contrasena);
    if (usuario) {
      this.usuarioActual = usuario;
      return true;
    }
    return false;
  }

  getUsuarioActual() {
    return this.usuarioActual;
  }

  logout() {
    this.usuarioActual = null;
  }
}
