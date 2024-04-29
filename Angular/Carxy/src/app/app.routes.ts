import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PanelComponent } from './panel/panel.component';



// app.module.ts

export const routes: Routes = [
  // Define tus rutas aquí
  { path: 'inicio', component: InicioComponent },
  { path: 'panel', component: PanelComponent },
  // ...
];
