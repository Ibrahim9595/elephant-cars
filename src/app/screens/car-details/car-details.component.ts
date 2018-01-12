import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrqWetsQkKcH4JVkcnrbB12pGfa-XZFLlWLs2KP91Pp8vktWL"

  constructor() { }

  ngOnInit() {
  }

}
