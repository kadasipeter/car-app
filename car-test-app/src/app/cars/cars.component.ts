import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
