import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  ListCars = [
    {id: 1, imgCar: '../../assets/Car2.png'},
    {id: 2, imgCar: '../../assets/Car2.png'},
    {id: 3, imgCar: '../../assets/Car2.png'},
    {id: 4, imgCar: '../../assets/Car2.png'},
    {id: 5, imgCar: '../../assets/Car2.png'},
    {id: 6, imgCar: '../../assets/Car2.png'},
    {id: 7, imgCar: '../../assets/Car2.png'},
    {id: 8, imgCar: '../../assets/Car2.png'},
    {id: 9, imgCar: '../../assets/Car2.png'},
  ]

}
