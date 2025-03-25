
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)

import { provideHttpClient } from '@angular/common/http';



import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { CarService } from './app/car.service';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),CarService,provideRouter(routes, withComponentInputBinding()),provideAnimations()]
})

  .catch((err) => console.error(err));
