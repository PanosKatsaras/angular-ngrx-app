import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { studentsReducer } from './state/students.reducer';
import { provideHttpClient } from '@angular/common/http';
import { StudentsRecordsEffects } from "./state/students.effects";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(), 
    provideAnimationsAsync(),
    provideEffects(StudentsRecordsEffects),
 
    provideStore(),
    provideState({
      name: "students",
      reducer: studentsReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
