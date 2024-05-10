import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ SidenavComponent ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
 

export class InicioComponent {
  

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
  

