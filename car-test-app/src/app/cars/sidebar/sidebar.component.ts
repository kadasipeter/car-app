import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Car } from 'src/app/core/car.model';
import { CarService } from 'src/app/core/car.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  cars: Car[] = [];

  private allCars: Car[] = [];
  private actualFilter = 0;

  constructor(private carService: CarService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.carService.cars$.subscribe( _ => {
      this.allCars = _;
      this.onFilterCars(this.actualFilter);
      this.cdr.detectChanges();
    });
  }

  onFilterCars(filter: number): void {
    this.actualFilter = filter;

    if (this.actualFilter === 0) {
      this.cars = this.allCars;
    }
    else {
      this.cars = this.allCars.filter(i => i.productionYear === this.actualFilter);
    }
  }
}
