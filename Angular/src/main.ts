
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';



import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { CarService } from './app/car.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { credInterceptor } from './app/cred.interceptor';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),CarService,provideRouter(routes, withComponentInputBinding()),provideAnimations(),provideHttpClient(withInterceptors([credInterceptor]))]
})

  .catch((err) => console.error(err));
