import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DijkstraCalculatorComponent } from './pages/dijkstra-calculator/dijkstra-calculator.component';
import { provideHttpClient } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DijkstraCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
