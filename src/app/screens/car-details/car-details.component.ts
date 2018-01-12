import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CarInterface } from '../../interfaces/car-interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: CarInterface;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.db.object<CarInterface>(`cars/${id}`).valueChanges()
    .subscribe(d => {
      this.car = d;
    });
  }

}
