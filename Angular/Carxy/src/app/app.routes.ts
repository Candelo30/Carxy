import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PanelComponent } from './panel/panel.component';
import { CarsViewComponent } from './cars-view/cars-view.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-fount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent , pathMatch: 'full' },
  { path: 'panel', component: PanelComponent },
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: 'CarsView/:titleCar/:imgCar', component: CarsViewComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
