import { Component, OnInit } from '@angular/core';
import { CarInterface } from '../../interfaces/car-interface';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {
  displayedColumns = ['brand', 'year', 'country', 'delete'];
  dataSource = new MatTableDataSource<CarInterface>();

  constructor(private db: AngularFireDatabase, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.db.list<CarInterface>('cars').snapshotChanges().subscribe(data => {
      let source = [];
      data.forEach(d=>{
        source.push(d.payload.val())
        source[source.length - 1]['key'] = d.key;
      });

      this.dataSource.data = source
    });
  }

  delete(car: CarInterface) {
    let confirmation = confirm(`Are you sure you want to delete car ${car.brand}`);
    if(confirmation) {
      this.db.list('cars').remove(car.key)
      .then(data => {

      }).catch(err => {

      });
    }
  }
  
}