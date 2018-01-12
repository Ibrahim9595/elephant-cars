import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from "./routes/Routes.module";

import {
  MatButtonModule,
  MatSelectModule, 
  MatIconModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CarsTableComponent } from './screens/cars-table/cars-table.component';
import { CarsAddComponent } from './screens/cars-add/cars-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarsTableComponent,
    CarsAddComponent
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
    MatCardModule,
    ReactiveFormsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
