import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ SidenavComponent ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
 

export class InicioComponent {

  constructor(private authService: AuthService) { }

  nombreUsuario: string = '';
  
  ngOnInit(): void {
    const usuario = this.authService.getUsuarioActual();
    if (usuario) {
      this.nombreUsuario = usuario.nombre;
    }
  }

  getSaludo(): string {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Buenos días ☀️';
    } else if (hour < 18) {
      return 'Buenas tardes 🌗';
    } else {
      return 'Buenas noches 🌕';
    }
  }



  

    ListCars = [{id: 1, imgCar: '../../assets/Car2.png', HeartStylesState: false, Description: ''},];
  
    // Función para agregar un nuevo carro a la lista
    addCar() {
      const newCar = {
        id: this.ListCars.length + 1,
        imgCar: '../../assets/Car2.png',
        HeartStylesState: false,
        Description: ''
      };
      this.ListCars.push(newCar);
    }
  
    // Función para cambiar el estado del corazón
    ToggleHeart(CarsID: number) {
      const carIndex = this.ListCars.findIndex(car => car.id === CarsID);
      if (carIndex !== -1) {
        this.ListCars[carIndex].HeartStylesState = !this.ListCars[carIndex].HeartStylesState;
      }
    }
  

  }
  

