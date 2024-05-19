import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { CustomReuseStrategy } from './app/app-routing-reuse-strategy';
import { RouteReuseStrategy } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    provideRouter(routes, withPreloading(PreloadAllModules))
  ]
})
  .catch(err => console.error(err));
