import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsTableComponent } from '../screens/cars-table/cars-table.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { CarsAddComponent } from '../screens/cars-add/cars-add.component';
import { CarDetailsComponent } from '../screens/car-details/car-details.component';
import { LoginComponent } from '../screens/login/login.component';
import { AuthGuardService } from '../auth-guard.service';
import { PageNotFoundComponent } from '../screens/page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', component: CarsTableComponent, canActivate: [AuthGuardService]},
    {path: 'home', component: CarsTableComponent, canActivate: [AuthGuardService]},
    {path: 'cars/add', component: CarsAddComponent, canActivate: [AuthGuardService]},
    {path: 'car/:id', component: CarDetailsComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
    {path:"**", component: PageNotFoundComponent, pathMatch:"full", canActivate:[AuthGuardService]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ],
    providers: [AuthGuardService]
})

export class RoutesModule { }