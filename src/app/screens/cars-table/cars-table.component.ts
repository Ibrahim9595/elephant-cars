import { Component, OnInit } from '@angular/core';
import { CarInterface } from './car-interface';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {
  carsList: CarInterface[] = [
    {brand: "Nissan", year: "2017", country: "Japan", delete: false},
    {brand: "Ford", year: "1999", country: "USA", delete: false}
  ];
    

  displayedColumns = ['brand', 'year', 'country', 'delete'];
  dataSource = new MatTableDataSource<CarInterface>();

  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.carsList
  }


}