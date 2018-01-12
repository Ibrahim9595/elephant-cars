import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Car } from './Car';
import { Console } from '@angular/core/src/console';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {
  brand = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  year = new FormControl('', [Validators.required, Validators.pattern(/[0-9]{4}/)]);
  url = new FormControl('', [Validators.required, Validators.pattern(/^https:\/\/([a-z0-9/?=:\-A-Z]+\.)+[a-z0-9/?=:\-A-Z]+$/)]);

  car: Car;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.car = new Car();
  }

  saveCar() {
    this.db.list('cars').push(this.car).then(data => {
      alert(data);
    });
  }

}
