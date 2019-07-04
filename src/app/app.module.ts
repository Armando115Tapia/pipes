import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { capitalizadoPipe } from 'e2e/src/pipes/capitalizado.pipe';

// Configuracion para colocar las fechas en español
import {LOCALE_ID} from '@angular/core' // colocar en provider
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
