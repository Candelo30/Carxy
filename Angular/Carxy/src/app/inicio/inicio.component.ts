import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription, empty } from 'rxjs';
import { SharedService} from '../services/shared-service.service';
import { routes } from '../app.routes';

 
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ SidenavComponent ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
 

export class InicioComponent  implements OnInit, OnDestroy {
  nombreUsuario: string = '';
  private logoutSubscription!: Subscription;
  private loginSubscription!: Subscription;

  constructor(private authService: AuthService, private sharedService: SharedService, private router: Router) {
    this.actualizarNombreUsuario()
  }

  ngOnInit(): void {
    this.actualizarNombreUsuario();

    this.logoutSubscription = this.sharedService.logoutObservable$.subscribe(() => {
      this.nombreUsuario = '';
    });

    this.loginSubscription = this.sharedService.loginObservable$.subscribe(() => {
      this.actualizarNombreUsuario();
    });
  }

  ngOnDestroy(): void {
    if (this.logoutSubscription) {
      this.logoutSubscription.unsubscribe();
    }
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  actualizarNombreUsuario(): void {
    const usuario = this.authService.getUsuarioActual();
    if (usuario) {
      this.nombreUsuario = usuario.nombre;
    }

    if ( this.nombreUsuario === '' ) {
      this.router.navigate(['/login'])
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
  

