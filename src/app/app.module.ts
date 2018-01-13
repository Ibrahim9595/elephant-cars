import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from "./routes/Routes.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {
  MatButtonModule,
  MatSelectModule, 
  MatIconModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
  MatCardModule,
  MatListModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CarsTableComponent } from './screens/cars-table/cars-table.component';
import { CarsAddComponent } from './screens/cars-add/cars-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarDetailsComponent } from './screens/car-details/car-details.component';
import { LoginComponent } from './screens/login/login.component';
import { UserAuthinticationService } from './user-authintication.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CarsTableComponent,
    CarsAddComponent,
    CarDetailsComponent,
    LoginComponent
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
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RoutesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [UserAuthinticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
