import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsTableComponent } from '../screens/cars-table/cars-table.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { CarsAddComponent } from '../screens/cars-add/cars-add.component';

const routes: Routes = [
    {path: '', component: CarsTableComponent},
    {path: 'cars/add', component: CarsAddComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class RoutesModule { }