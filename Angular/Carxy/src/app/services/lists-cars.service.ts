import { ChangeDetectorRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsCarsService {

  constructor(private cdr: ChangeDetectorRef) {}
  listCartsDesing: any[] = [
    {id: 1, imgCar: '../../assets/Car2.png', titleCar: 'Diseño 1'}

  ]

  getListCars() {
    return this.listCartsDesing;
  }

  


  // AÑADIR

  addCar(newCar: any) {
    this.listCartsDesing.push(newCar);

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
    }
  }

  // ELIMINAR

  deleteCar(id: number) {
    const index = this.listCartsDesing.findIndex(car => car.id === id);
    if (index !== -1) {
      this.listCartsDesing.splice(index, 1);
      this.cdr.detectChanges(); // Marcar para detección de cambios
    }
  }

}
