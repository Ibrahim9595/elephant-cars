import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from "./Routes.module";

import {
  MatButtonModule,
  MatSelectModule, 
  MatIconModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CarsTableComponent } from './screens/cars-table/cars-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
