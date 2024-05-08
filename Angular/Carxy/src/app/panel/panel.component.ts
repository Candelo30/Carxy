import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ListsCarsService } from '../services/lists-cars.service';
import { routes } from '../app.routes';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})

export class PanelComponent  implements OnInit {


  TotalCars: number = 0






  listCartsDesing = [


    {id: 1, imgCar: '../../assets/Car2.png', titleCar: 'Diseño 1'
    }

  ]

  constructor(private route: ActivatedRoute) {
    // Llama a la función para actualizar la cantidad total de carros al iniciar la página
    this.upDatelengthListCar();
  }



  upDatelengthListCar() {
   this.TotalCars = this.listCartsDesing.length
  }


  

  addCar() {
    let lastId = 0;
    if (this.listCartsDesing.length > 0) {
      // Encontrar el último ID existente
      lastId = Math.max(...this.listCartsDesing.map(car => car.id));
    }
    
    const newId = lastId + 1;
  
    // Añadir el nuevo carro a la lista
    const newCar = {
      id: newId,
      imgCar: '../../assets/Car2.png',
      titleCar: `Diseño ${newId}`
    };
  
    this.listCartsDesing.push(newCar);
    
    this.upDatelengthListCar();
  }
  
  
  copyCar(id: number) {
    const carToCopy = this.listCartsDesing.find(car => car.id === id);
    if (carToCopy) {
      const lastCopyNumber = this.listCartsDesing.filter(car => car.titleCar.startsWith(`Copia ${carToCopy.titleCar}`)).length;
      const newCar = {
        id: this.listCartsDesing.length + 1,
        imgCar: carToCopy.imgCar,
        titleCar: `Copia ${carToCopy.titleCar} ${lastCopyNumber + 1}`
      };
      this.listCartsDesing.push(newCar);
      this.upDatelengthListCar();
    }
  }
  
  


  deleteCar(id: number) {
    const index = this.listCartsDesing.findIndex(car => car.id === id);
    if (index !== -1) {
      this.listCartsDesing.splice(index, 1);
      this.upDatelengthListCar();
    }
  }


  ngOnInit(): void {
  }
  
}
